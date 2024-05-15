import { useContractWrite } from "@thirdweb-dev/react";
import { useSwapContract } from "./useSwapContract";

export const useSwapXpcMutation = () => {
  const { contract } = useSwapContract();
  const mutation = useContractWrite(contract, "swapXpc");
  return mutation;
};
