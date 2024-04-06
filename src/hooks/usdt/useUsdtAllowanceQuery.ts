import { useAddress, useContractRead } from "@thirdweb-dev/react";
import { USDT } from "metaxot-contract/typechain-types";
import { ZERO_ADDRESS } from "constant/dummyResAPI";
import { useUsdtContract } from "hooks/usdt/useUsdtContract";
import { useMarketContract } from "hooks/market";
import { BigNumber } from "ethers";

type Allowance = Awaited<ReturnType<USDT["allowance"]>>;

export const useUsdtAllowanceQuery = () => {
  const { contract } = useUsdtContract();
  const { contract: marketContract } = useMarketContract();
  const address = useAddress() ?? ZERO_ADDRESS;
  const { data, ...rest } = useContractRead(contract, "allowance", [
    address,
    marketContract?.getAddress() ?? ZERO_ADDRESS,
  ]);
  return { data: data as undefined | BigNumber, ...rest };
};
