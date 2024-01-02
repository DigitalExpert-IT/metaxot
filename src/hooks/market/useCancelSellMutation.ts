import { useAddress, useContractWrite } from "@thirdweb-dev/react";
import { useMarketContract } from "./useMarketContract"
import { ZERO_ADDRESS } from "constant/dummyResAPI";

export const useCancelSellMutation = () => {
  const market = useMarketContract();
  const address = useAddress() ?? ZERO_ADDRESS;

  const { mutateAsync: cancelSellMutate, ...rest } = useContractWrite(
    market.contract,
    "cancelSellNft"
  );

  const handleCancelSell = async (id: number) => {
    if (address === ZERO_ADDRESS) {
      throw {
        code: "NotConnect",
      };
    }

    const cancelSell = await cancelSellMutate({
      args: [id],
    });
    return cancelSell.receipt;
  };

  return { ...rest, mutateAsync: handleCancelSell };
};
