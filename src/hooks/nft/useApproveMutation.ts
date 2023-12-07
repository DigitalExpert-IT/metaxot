import { useContractWrite } from "@thirdweb-dev/react";
import { useNftContract } from "./useNftContract";

export const useApproveMutation = () => {
  const { contract } = useNftContract();
  const mutation = useContractWrite(contract, "approve");
  return mutation;
};
