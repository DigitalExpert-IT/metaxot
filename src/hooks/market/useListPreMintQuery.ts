import { useMarketContract } from "./useMarketContract";
import { useContractRead } from "@thirdweb-dev/react";
import { Market } from "metaxot-contract/typechain-types";
import { useMemo } from "react";
import { toBn } from "evm-bn";

type GetListedPremintNftSales = Awaited<
  ReturnType<Market["getListedPreMintNftSales"]>
>;

export const useListPreMintQuery = () => {
  const marketContract = useMarketContract();
  const { data, ...rest } = useContractRead(
    marketContract.contract,
    "getListedPreMintNftSales"
  );

  const normalize = useMemo(() => {
    return data?.map((e: any) => {
      return { ...e };
    });
  }, [data]);

  return {
    data: normalize as undefined | GetListedPremintNftSales,
    ...rest,
  };
};

export const useListPreMintQueryByCategory = (id_category: number) => {
  const marketContract = useMarketContract();
  const { data, ...rest } = useContractRead(
    marketContract.contract,
    "getListedPreMintNftSalesByCategory",
    [toBn(id_category.toString(), 1)]
  );

  const normalize = useMemo(() => {
    return data?.map((e: any) => {
      return { ...e };
    });
  }, [data]);

  return {
    data: normalize as undefined | GetListedPremintNftSales,
    ...rest,
  };
};
