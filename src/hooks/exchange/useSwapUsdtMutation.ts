import { useContractWrite } from "@thirdweb-dev/react";
import { useSwapContract } from "./useSwapContract";

export const useSwapUsdtMutation = () => {
  const { contract } = useSwapContract();
  const mutation = useContractWrite(contract, "swapUsdt");
  return mutation;
};
