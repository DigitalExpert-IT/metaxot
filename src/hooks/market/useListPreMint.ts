import { useEffect, useState } from "react";
import { useMarketContract } from "./useMarketContract";
import { useContractRead } from "@thirdweb-dev/react";

export const usePreMint = () => {
  const marketContract = useMarketContract();
  const nftMarket = useContractRead(
    marketContract.contract,
    "getListedPremintNftSales"
  );
  return nftMarket;
};
