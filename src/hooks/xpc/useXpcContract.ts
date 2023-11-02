import { useContract } from "@thirdweb-dev/react";
import { XPC_CONTRACT } from "constant/address";
import XPC from "metaxot-contract/artifacts/contracts/Xpc.sol/Xpc.json";
const CHAIN_ID = process.env.NEXT_PUBLIC_CHAIN_ID ?? "0x29a";
const address = XPC_CONTRACT[CHAIN_ID as "0x29a"];
export const useXpcContract = () => {
  return useContract(address, XPC.abi);
};
