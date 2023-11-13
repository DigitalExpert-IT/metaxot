import { useMarketContract } from "./useMarketContract";
import { useContractRead } from "@thirdweb-dev/react";
import { Market } from "metaxot-contract/typechain-types";
import Axios from "axios";
import { useEffect, useState } from "react";

type GetListedPremintNftSales = Awaited<
  ReturnType<Market["getListedPremintNftSales"]>
>;

export const useListPreMintQuery = () => {
  const [nftWithDetail, setNftWithDetail] = useState<any[]>([]);
  const marketContract = useMarketContract();
  const { data, ...rest } = useContractRead(
    marketContract.contract,
    "getListedPremintNftSales"
  );
  const fetchData = async () => {
    if (!data) return;
    const promises = data.map(async (e: any) => {
      const AxiosResponse = await Axios.get(
        `api/market/list/pre-mint/${e.uuid}`
      );
      return { ...e, ...AxiosResponse.data };
    });
    const nftList = await Promise.all(promises);
    setNftWithDetail(nftList);
  };

  useEffect(() => {
    fetchData();
    return () => {};
  }, [data]);

  return {
    data: nftWithDetail as undefined | GetListedPremintNftSales,
    ...rest,
  };
};
