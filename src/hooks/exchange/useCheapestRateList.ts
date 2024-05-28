import { useEffect, useMemo, useState } from "react";
import { useSwapContract } from "./useSwapContract";
import { BigNumber } from "ethers";

export type TRateList = { rate: number; amount: number }[] | null;

export type TData = {
  rateList: TRateList;
  totalSpend: number;
  afterFee: number;
};

export const useCheapestRateList = (amount: number) => {
  const { contract } = useSwapContract();
  const [cheapestList, setCheapestList] = useState<
    { rate: number; amount: number }[] | null
  >(null);
  const [error, setError] = useState<string | null>("");
  const [isLoading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const getCheapest = async (amount: number) => {
      setLoading(true);

      try {
        const rateList = await contract?.call("getCheapestRateTokensByAmount", [
          amount,
        ]);
        setError(null);
        setCheapestList(
          rateList.map((rate: { rate: BigNumber; amount: BigNumber }) => ({
            rate: Number(rate.rate),
            amount: Number(rate.amount),
          }))
        );
      } catch (error: any) {
        console.error(error);
        setError(error?.reason);
      } finally {
        setLoading(false);
      }
    };

    if (amount <= 0) return;

    getCheapest(amount);
  }, [amount]);

  const data: TData = useMemo(() => {
    if (!cheapestList)
      return {
        rateList: null,
        totalSpend: 0,
        afterFee: 0,
      };

    let amountNeed = amount;
    let rateList: { rate: number; amount: number }[] | null = null;
    let totalSpend = 0;
    let afterFee = 0;

    rateList = cheapestList?.map(item => {
      let availableAmount = 0;
      if (amountNeed >= item.amount) {
        availableAmount = item.amount;
        amountNeed -= item.amount;
      } else {
        availableAmount = amountNeed;
      }

      return {
        rate: item.rate,
        amount: availableAmount,
      };
    });

    totalSpend = rateList.reduce(
      (acc, item) => (acc += (item.rate / 100) * item.amount),
      0
    );

    afterFee = amount - (amount * 0.25) / 100;

    return {
      rateList: rateList,
      totalSpend: totalSpend,
      afterFee: afterFee,
    };
  }, [cheapestList, amount, error]);

  return {
    data,
    isLoading,
    error,
  };
};
