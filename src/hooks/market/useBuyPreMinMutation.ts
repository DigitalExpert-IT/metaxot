import { useAddress, useContractWrite } from "@thirdweb-dev/react";
import { useMarketContract } from "./useMarketContract";
import { useApproveMutation, useXpcContract } from "hooks/xpc";
import { ZERO_ADDRESS } from "constant/dummyResAPI";
import { BigNumber } from "ethers";
import { useBalanceQuery } from "hooks/xpc/useBalanceQuery";

export const useBuyPreMintMutation = () => {
  const market = useMarketContract();
  const xpc = useXpcContract();
  const address = useAddress() ?? ZERO_ADDRESS;

  const { data: myBalance } = useBalanceQuery();
  const { mutateAsync: mutateAsyncApprove } = useApproveMutation();
  const { mutateAsync: buyAsync, ...rest } = useContractWrite(
    market.contract,
    "buyPreMintNft"
  );

  const handleBuy = async (id: number, price: BigNumber) => {
    if (address === ZERO_ADDRESS) {
      throw {
        code: "NotConnect",
      };
    }
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

    // approve trigger
    await mutateAsyncApprove({
      args: [market.contract?.getAddress(), price],
    });
    handleBuy(id, price);
  };

  return { ...rest, mutateAsync: handleBuy };
};
