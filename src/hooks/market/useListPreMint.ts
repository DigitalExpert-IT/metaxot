import { useMarketContract } from "./useMarketContract";
import { useContractRead, useContractWrite } from "@thirdweb-dev/react";

export const usePreMint = () => {
  const marketContract = useMarketContract();
  // const buyCard = useContractWrite(, "buyPremintNft");
  const nftMarket = useContractRead(
    marketContract.contract,
    "getListedPremintNftSales"
  );
  return nftMarket;
};
