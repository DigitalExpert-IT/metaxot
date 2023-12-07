import { useContract } from "@thirdweb-dev/react";
import { MNFT as MNFT_CONTRACT } from "constant/address";
import MNFT from "metaxot-contract/artifacts/contracts/MNFT.sol/MNFT.json";

const CHAIN_ID = process.env.NEXT_PUBLIC_CHAIN_ID ?? "0x29a";
const address = MNFT_CONTRACT[CHAIN_ID as "0x29a"];

export const useNftContract = () => {
  return useContract(address, MNFT.abi);
};
