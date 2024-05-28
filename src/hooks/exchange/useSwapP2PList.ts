import { useState, useEffect } from "react";
import { useSwapContract } from "./useSwapContract";
import { useContractRead } from "@thirdweb-dev/react";
import { toBn } from "evm-bn";

type TTokenSell = {
  rate: number;
  amount: number;
};

export const useSwapP2PList = () => {
  const { contract } = useSwapContract();
  const { data: cheapestRate } = useContractRead(contract, "cheapestRate");
  const [isLoading, setLoading] = useState<boolean>(true);
  const [tokenSellList, setTokenList] = useState<TTokenSell[] | null>(null);

  const getTokenList = async () => {
    if (!contract) return;
    let list: TTokenSell[] = [];

    try {
      setLoading(true);

      for (let i = Number(cheapestRate); i < 100; i++) {
        const tokenAmount = await contract?.call("_rateSellAmountCounter", [i]);
        if (tokenAmount.gt(toBn("0"))) {
          list.push({ rate: i, amount: Number(tokenAmount) });
        }
      }

      setTokenList(list);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const getTokenInter = setInterval(getTokenList, 10000); // refetch per 10sc

    return () => clearInterval(getTokenInter);
  }, [cheapestRate]);

  return {
    tokenSellList,
    isLoading: tokenSellList ? false : isLoading,
  };
};
