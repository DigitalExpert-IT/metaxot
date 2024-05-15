import { useBalance } from "@thirdweb-dev/react";
import { useUsdtContract } from "hooks/usdt/useUsdtContract";

export const useUsdtBalanceQuery = () => {
  const { contract } = useUsdtContract();
  const { data, ...rest } = useBalance(contract?.getAddress());
  return { data: data, ...rest };
};
