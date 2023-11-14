import { useContractWrite } from "@thirdweb-dev/react";
import { useXpcContract } from "./useXpcContract";
import { useMarketContract } from "hooks/market";

export const useApproveMutation = () => {
  const { contract } = useXpcContract();
  const mutation = useContractWrite(contract, "approve");
  return mutation;
};
