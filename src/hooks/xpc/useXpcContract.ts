import { useContract } from "@thirdweb-dev/react";
import { XPC_CONTRACT } from "constant/address";
import { CURRENT_CHAIN_ID } from "lib/contractFactory";
import xpc from "metaxot-contract/artifacts/contracts/Xpc.sol/Xpc.json";

const contractAddressXpc = XPC_CONTRACT[CURRENT_CHAIN_ID];

export const useXpcContract = () => {
  return useContract(contractAddressXpc, xpc.abi);
};
