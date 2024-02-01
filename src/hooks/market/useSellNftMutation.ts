import { useAddress, useContractWrite } from "@thirdweb-dev/react";
import { useMarketContract } from "./useMarketContract";
import { useApproveMutation, useNftContract } from "hooks/nft";
import { ZERO_ADDRESS } from "constant/dummyResAPI";
import { BigNumberish } from "ethers";
import useAuth from "hooks/metaxotGame/useAuth";

export const useSellNftMutation = () => {
  const market = useMarketContract();
  const mnft = useNftContract();
  const address = useAddress() ?? ZERO_ADDRESS;
  const { isAuthenticated } = useAuth();

  const { mutateAsync: mutateAsyncApprove } = useApproveMutation();
  const { mutateAsync: sellAsync, ...rest } = useContractWrite(
    market.contract,
    "sellNft"
  );

  const handleSell = async (
    id: number,
    price: string | BigNumberish | Number
  ) => {
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
      args: [market.contract?.getAddress(), id],
    });

    // if approved do sell
    const approved = await mnft.contract?.call("getApproved", [id]);
    if (approved == market.contract?.getAddress()) {
      const sell = await sellAsync({
        args: [id, price],
      });
      return sell.receipt;
    }

    handleSell(id, price);
  };

  return { ...rest, mutateAsync: handleSell };
};
