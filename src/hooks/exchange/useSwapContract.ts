import { useContract } from "@thirdweb-dev/react";
import { SWAP_CONTRACT } from "constant/address";
import { CURRENT_CHAIN_ID } from "lib/contractFactory";
import swap from "metaxot-contract/artifacts/contracts/Exchange.sol/Exchange.json";

const contractAddressSwap = SWAP_CONTRACT[CURRENT_CHAIN_ID];

export const useSwapContract = () => {
  return useContract(contractAddressSwap, swap.abi);
};
