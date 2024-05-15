import { useContract } from "@thirdweb-dev/react";
import { USDT_CONTRACT } from "constant/address";
import { CURRENT_CHAIN_ID } from "lib/contractFactory";
import usdt from "metaxot-contract/artifacts/contracts/USDT.sol/USDT.json";

const contractAddressUsdt = USDT_CONTRACT[CURRENT_CHAIN_ID];

export const useUsdtContract = () => {
  return useContract(contractAddressUsdt, usdt.abi);
};
