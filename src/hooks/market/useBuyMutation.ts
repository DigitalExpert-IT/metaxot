import { useAddress, useContractWrite } from "@thirdweb-dev/react";
import { useMarketContract } from "./useMarketContract";
import { useApproveMutation, useXpcContract } from "hooks/xpc";
import { ZERO_ADDRESS } from "constant/dummyResAPI";
import { BigNumber } from "ethers";
import useAuth from "hooks/metaxotGame/useAuth";
import { useBalanceQuery } from "hooks/xpc/useXpcBalanceQuery";

export const useBuyMutation = () => {
  const market = useMarketContract();
  const xpc = useXpcContract();
  const { isAuthenticated } = useAuth();
  const address = useAddress() ?? ZERO_ADDRESS;

  const { data: myBalance } = useBalanceQuery();
  const { mutateAsync: mutateAsyncApprove } = useApproveMutation();
  const { mutateAsync: buyAsync, ...rest } = useContractWrite(
    market.contract,
    "buyNft"
  );

  const handleBuy = async (id: number, price: BigNumber) => {
    if (!isAuthenticated) {
      throw {
        code: "NotLogged",
      };
    }
    if (address === ZERO_ADDRESS) {
      throw {
        code: "NotConnect",
      };
    }

    // approve trigger
    await mutateAsyncApprove({
      args: [market.contract?.getAddress(), price],
    });

    const allowance = await xpc.contract?.call("allowance", [
      address,
      market.contract?.getAddress(),
    ]);
    if (myBalance?.value?.lt(price)) {
      throw {
        code: "NotEnoughBalance",
      };
    }

    // need approve or increase if allowance lower than price
    if (allowance.gte(price)) {
      const buy = await buyAsync({
        args: [id],
      });
      return buy.receipt;
    }

    handleBuy(id, price);
  };

  return { ...rest, mutateAsync: handleBuy };
};
