import { useMarketContract } from "./useMarketContract";
import { useContractRead } from "@thirdweb-dev/react";
import { ZERO_ADDRESS } from "constant/dummyResAPI";
import { Market } from "contracts/typechain-types";
import { useMemo } from "react";

type GetListedNftSales = Awaited<ReturnType<Market["getListedNftSales"]>>;

export const useListNftSalesQuery = () => {
  const marketContract = useMarketContract();
  const { data, ...rest } = useContractRead(
    marketContract.contract,
    "getListedNftSales"
  );

  const normalize = useMemo(() => {
    return data?.reduce((acc: any, nft: any) => {
      if (nft["owner"] == ZERO_ADDRESS) {
        return [...acc];
      } else {
        return [...acc, { ...nft }];
      }
    }, []);
  }, [data]);

  return {
    data: normalize as undefined | GetListedNftSales,
    ...rest,
  };
};
