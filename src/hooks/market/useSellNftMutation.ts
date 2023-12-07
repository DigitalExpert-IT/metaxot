import { useAddress, useContractWrite } from "@thirdweb-dev/react";
import { useMarketContract } from "./useMarketContract";
import { useApproveMutation, useNftContract } from "hooks/nft";
import { ZERO_ADDRESS } from "constant/dummyResAPI";

export const useSellNftMutation = () => {
  const market = useMarketContract();
  const mnft = useNftContract();
  const address = useAddress() ?? ZERO_ADDRESS;

  const { mutateAsync: mutateAsyncApprove } = useApproveMutation();
  const { mutateAsync: sellAsync, ...rest } = useContractWrite(
    market.contract,
    "sellNft"
  );

  const handleSell = async (id: number) => {
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
        args: [id],
      });
      return sell.receipt;
    }

    handleSell(id);
  };

  return { ...rest, mutateAsync: handleSell };
};
