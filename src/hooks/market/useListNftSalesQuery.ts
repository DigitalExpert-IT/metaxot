import { useMarketContract } from "./useMarketContract";
import { useContractRead } from "@thirdweb-dev/react";
import { Market } from "metaxot-contract/typechain-types";
import { useMemo } from "react";
import { DUMMY_JSON } from "constant/dummyResAPI";

type GetListedNftSales = Awaited<ReturnType<Market["getListedNftSales"]>>;

export const useListNftSalesQuery = () => {
  const marketContract = useMarketContract();
  const { data, ...rest } = useContractRead(
    marketContract.contract,
    "getListedNftSales"
  );

  const normalize = useMemo(() => {
    return data?.map((e: any) => {
      const detail = DUMMY_JSON.find(j => j.uuid === e.uuid);
      return { ...e, ...detail };
    });
    return () => {};
  }, [data]);

  return {
    data: normalize as undefined | GetListedNftSales,
    ...rest,
  };
};
