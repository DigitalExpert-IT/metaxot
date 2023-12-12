import { useAddress, useContractRead } from "@thirdweb-dev/react";
import { Xpc } from "metaxot-contract/typechain-types";
import { useXpcContract } from "./useXpcContract";
import { ZERO_ADDRESS } from "constant/dummyResAPI";
import { useMarketContract } from "hooks/market";
import { BigNumber } from "ethers";

type Allowance = Awaited<ReturnType<Xpc["allowance"]>>;

export const useAllowanceQuery = () => {
  const { contract } = useXpcContract();
  const { contract: marketContract } = useMarketContract();
  const address = useAddress() ?? ZERO_ADDRESS;
  const { data, ...rest } = useContractRead(contract, "allowance", [
    address,
    marketContract?.getAddress() ?? ZERO_ADDRESS,
  ]);
  return { data: data as undefined | BigNumber, ...rest };
};
