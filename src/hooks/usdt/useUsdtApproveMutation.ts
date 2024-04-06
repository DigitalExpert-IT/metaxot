import { useContractWrite } from "@thirdweb-dev/react";
import { useUsdtContract } from "hooks/usdt/useUsdtContract";

export const useUsdtApproveMutation = () => {
  const { contract } = useUsdtContract();
  const mutation = useContractWrite(contract, "approve");
  return mutation;
};
