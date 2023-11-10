import { useAddress, useContractWrite } from "@thirdweb-dev/react";
import { useMarketContract } from "./useMarketContract";

export const useBuyPreMint = () => {
  const market = useMarketContract();
  const mutate = useContractWrite(market.contract, "buyPreMintNft");
  return mutate;
};
