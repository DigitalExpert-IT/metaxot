import { useContractRead } from "@thirdweb-dev/react";
import { Xpc } from "metaxot-contract/typechain-types";
import { useXpcContract } from "./useXpcContract";

type Allowance = Awaited<ReturnType<Xpc["allowance"]>>;

export const useAllowanceQuery = () => {
  const { contract } = useXpcContract();
  const { data, ...rest } = useContractRead(contract, "allowance");
  return { data: data as undefined | Allowance, ...rest };
};
