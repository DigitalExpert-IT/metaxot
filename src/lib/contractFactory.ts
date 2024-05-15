import detectEthereumProvider from "@metamask/detect-provider";
import { RPC_ENDPOINTS, RPC_ENDPOINT_LIST } from "constant/endpoint";
import { ethers } from "ethers";
import globalExchangeJson from "global-swap/artifacts/contracts/globalExchange.sol/GlobalExchange.json";
import erc20Json from "metaxot-contract/artifacts/@openzeppelin/contracts/token/ERC20/ERC20.sol/ERC20.json";
import { SWAP_CONTRACT, USDT_CONTRACT } from "constant/address";
import { ERC20 } from "metaxot-contract/typechain-types";
import { GlobalExchange } from "global-swap/typechain-types";

declare module globalThis {
  var providerCache: Record<string, any>;
}

export const CURRENT_CHAIN_ID = (process.env.NEXT_PUBLIC_CHAIN_ID ||
  "0x61") as "0x61";
const ENDPOINT = RPC_ENDPOINTS[CURRENT_CHAIN_ID];

/**
 * function to get provider asynchronously and memoize it
 * @param key Cache key
 * @param fn Async function to initiate provider if it does not exist in cache
 * @returns Provider
 */
const getFromCache = async <T>(fn: () => Promise<T>): Promise<T> => {
  const key = fn.toString();
  if (!globalThis.providerCache) globalThis.providerCache = {};
  if (!globalThis.providerCache[key]) {
    globalThis.providerCache[key] = await fn();
  }

  return globalThis.providerCache[key];
};

export const getWallet = async () => {
  const ethProvider = await detectEthereumProvider();
  const wallet = new ethers.providers.Web3Provider(ethProvider!);

  return wallet;
};

export const getMainProvider = async () => {
  return await getFromCache<ethers.providers.JsonRpcProvider>(
    async () => new ethers.providers.JsonRpcProvider(ENDPOINT)
  );
};

export const getSwapContract = async () => {
  const provider = await getMainProvider();
  const contract = await getFromCache(
    async () =>
      new ethers.Contract(
        SWAP_CONTRACT[CURRENT_CHAIN_ID],
        globalExchangeJson.abi,
        provider
      ) as GlobalExchange
  );

  return contract;
};

export const getSwapSignerContract = async () => {
  const wallet = await getWallet();
  const contract = await getFromCache(
    async () =>
      new ethers.Contract(
        SWAP_CONTRACT[CURRENT_CHAIN_ID],
        globalExchangeJson.abi,
        wallet.getSigner()
      ) as GlobalExchange
  );

  return contract;
};

export const getERC20Contract = async (address: string) => {
  const provider = await getMainProvider();

  return new ethers.Contract(address, erc20Json.abi, provider) as ERC20;
};

export const getERC20SignerContract = async (address: string) => {
  const wallet = await getWallet();

  return new ethers.Contract(
    address,
    erc20Json.abi,
    wallet.getSigner()
  ) as ERC20;
};

export const getUSDTContract = async () => {
  const contract = await getFromCache(async () =>
    getERC20Contract(USDT_CONTRACT[CURRENT_CHAIN_ID])
  );

  return contract;
};

export const getUSDTSignerContract = async () => {
  const contract = await getFromCache(async () =>
    getERC20SignerContract(USDT_CONTRACT[CURRENT_CHAIN_ID])
  );

  return contract;
};

export const getMainProviderWithSwitcher = async (pickRpc: number) => {
  const RPCLIST = RPC_ENDPOINT_LIST[CURRENT_CHAIN_ID][pickRpc as 0];

  return new ethers.providers.JsonRpcProvider(RPCLIST);
};
