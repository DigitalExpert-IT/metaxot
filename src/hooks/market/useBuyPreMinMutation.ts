import { useContractWrite } from "@thirdweb-dev/react";
import { useMarketContract } from "./useMarketContract";

export const useBuyPreMintMutation = () => {
  const market = useMarketContract();
  const mutation = useContractWrite(market.contract, "buyPreMintNft");
  return mutation;
};
