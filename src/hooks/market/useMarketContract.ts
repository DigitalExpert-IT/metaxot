import { useContract } from "@thirdweb-dev/react";
import { MARKET_CONTRACT } from "constant/address";
import Market from "contracts/artifacts/contracts/Market.sol/Market.json";

const CHAIN_ID = process.env.NEXT_PUBLIC_CHAIN_ID ?? "0x29a";
const address = MARKET_CONTRACT[CHAIN_ID as "0x29a"];

export const useMarketContract = () => {
  return useContract(address, Market.abi);
};
