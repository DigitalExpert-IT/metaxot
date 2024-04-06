import { Mumbai, Polygon } from "@thirdweb-dev/chains";

const CURRENT_CHAIN_ID = (process.env.NEXT_PUBLIC_CHAIN_ID || "0x61") as "0x61";

const chainMap = {
  "0x13881": Mumbai,
  "0x89": Polygon,
  "0x29a": {
    chainId: 666,
    chain: "Devnet",
    name: "Devnet",
    testnet: true,
    slug: "devnet",
    shortName: "dvn",
    nativeCurrency: {
      name: "DTH",
      symbol: "DTH",
      decimals: 18,
    },
    rpc: ["https://valhalacoin.cloud"],
  },
  "0x539": {
    chainId: 1337,
    chain: "Sabak",
    name: "Sabak",
    testnet: true,
    slug: "sabak",
    shortName: "sbk",
    nativeCurrency: {
      name: "STH",
      symbol: "STH",
      decimals: 18,
    },
    rpc: ["HTTP://127.0.0.1:7545"],
  },
  "0x7a69": {
    chainId: 31337,
    chain: "Berutu",
    name: "Berutu",
    testnet: true,
    slug: "berutu",
    shortName: "brt",
    nativeCurrency: {
      name: "BTH",
      symbol: "BTH",
      decimals: 18,
    },
    rpc: ["http://127.0.0.1:8545/"],
  },
  "0x61": {
    // Testnet
    chainId: 97,
    chain: "BNBTestnet",
    name: "BNB Smart Chain Testnet",
    testnet: true,
    slug: "bnbtestnet",
    shortName: "bts",
    nativeCurrency: {
      name: "TBNB",
      symbol: "TBNB",
      decimals: 10,
    },
    rpc: ["https://data-seed-prebsc-1-s1.bnbchain.org:8545"],
  },
};

export const getActiveChain = () => {
  return chainMap[CURRENT_CHAIN_ID] as any;
};
