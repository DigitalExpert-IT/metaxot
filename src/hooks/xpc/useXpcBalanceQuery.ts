import { useBalance } from "@thirdweb-dev/react";
import { useXpcContract } from "./useXpcContract";

export const useBalanceQuery = () => {
  const { contract } = useXpcContract();
  const { data, ...rest } = useBalance(contract?.getAddress());
  return { data: data, ...rest };
};
