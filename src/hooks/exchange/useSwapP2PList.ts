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
  const [isLoading, setLoading] = useState<boolean>(false);
  const [tokenSellList, setTokenList] = useState<TTokenSell[]>([]);

  useEffect(() => {
    const getTokenList = async () => {
      let list: TTokenSell[] = [];
      setLoading(true);

      for (let i = Number(cheapestRate); i < 100; i++) {
        const tokenAmount = await contract?.call("_rateSellAmountCounter", [i]);
        if (tokenAmount.gt(toBn("0"))) {
          list.push({ rate: i, amount: Number(tokenAmount) });
        }
      }

      setTokenList(list);
      setLoading(false);
    };

    getTokenList();
  }, [cheapestRate]);

  return { tokenSellList, isLoading };
};
