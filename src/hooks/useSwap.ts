import {
  getWallet,
  getUSDTContract,
  getSwapContract,
  CURRENT_CHAIN_ID,
  getSwapSignerContract,
  getUSDTSignerContract,
} from "lib/contractFactory";
import create from "zustand";
import { toBn } from "evm-bn";
import { useEffect } from "react";
import { BigNumber } from "ethers";
import { createInitiator } from "utils";
import { SWAP_CONTRACT } from "constant/address";
import { useWallet, useWalletStore } from "hooks";

interface ICurrencySpec {
  pair: {
    name: string;
    price: BigNumber;
    decimals: BigNumber;
  };
  address: string;
  balance: BigNumber;
  totalPool: BigNumber;
}
interface ICurrency {
  usdt: ICurrencySpec;
}
interface IStore {
  currency: ICurrency;
  initialized: boolean;
}

const initialState: IStore = {
  initialized: false,
  currency: {
    usdt: {
      pair: {
        name: "",
        decimals: BigNumber.from(0),
        price: BigNumber.from(0),
      },
      address: "",
      totalPool: BigNumber.from(0),
      balance: BigNumber.from(0),
    },
  },
};

export const useStore = create(() => initialState);
const { setState } = useStore;

const fetchSwap = async () => {
  const usdt = await getUSDTContract();
  const swap = await getSwapContract();
  const wallet = await getWallet();
  const [address] = await wallet.listAccounts();
  const usdtAddress = await swap.usdt();

  const [usdtRatio, usdtPool, usdtBalance] = await Promise.all([
    swap.getRatioFromAddress(usdtAddress),
    usdt.balanceOf(swap.address),
    usdt.balanceOf(address),
  ]);

  setState({
    initialized: true,
    currency: {
      usdt: {
        pair: {
          name: usdtRatio.symbol,
          price: usdtRatio.price,
          decimals: usdtRatio.decimal,
        },
        totalPool: usdtPool,
        address: usdtAddress,
        balance: usdtBalance,
      },
    },
  });
};

const init = createInitiator(async () => {
  const contractSwap = await getSwapContract();
  await fetchSwap();

  contractSwap.on("SwapToken", () => {
    fetchSwap();
  });

  useWalletStore.subscribe(
    state => state.address,
    () => {
      fetchSwap();
    },
    { fireImmediately: true }
  );
});

export const useSwap = () => {
  const store = useStore();
  const { address } = useWallet();

  useEffect(() => {
    init();
  }, []);

  /**
   * @param gnetAmount type bignumber with 9 decimals
   * @returns contract receipts
   * @example approveUsdt(toBn('1', 9))
   * @description this function make litle bit confusing
   * why parameters gnetAmount.
   * so in this function you ned swap your USDT with GNET.
   * this function depend in to getUsdtPrice.
   * it means if user input how much gnet needed it going to be calculate how much USDT price want to swap.
   * and than after that this function call approval to approve your USDT to swap with GNET
   */
  const approveUsdt = async (usdtAmount: BigNumber) => {
    const usdt = await getUSDTContract();
    const balance = await usdt.balanceOf(address);
    const usdtSigner = await getUSDTSignerContract();
    const swapContract = await getSwapContract();

    const allowance = await usdt.allowance(
      address,
      SWAP_CONTRACT[CURRENT_CHAIN_ID]
    );

    if (balance.lt(usdtAmount)) {
      throw {
        code: "NotEnoughBalance",
      };
    }

    if (allowance.lt(usdtAmount)) {
      const tx = await usdtSigner.approve(
        SWAP_CONTRACT[CURRENT_CHAIN_ID],
        toBn("1000000", 6)
      );

      const receipt = await tx.wait();

      return receipt;
    }
  };

  /**
   * @param data
   * @returns contract receipts
   * @description
   * {data.currency} user wanted token,
   * {data.amount} how much user want to swap his token
   */
  //   const swapCurrency = async (data: { currency: string; amount: string }) => {
  //     const swapToGnet = data.currency === "GNET";
  //     const swapContract = await getSwapSignerContract();
  //     if (swapToGnet) {
  //       await approveUsdt(toBn(data.amount, 6));
  //       const tx = await swapContract.swapUsdt(toBn(data.amount, 6));
  //       const receipt = await tx.wait();
  //       return receipt;
  //     }
  //     // in this logic, u swap your GNET with USDT
  //     await approveGnet(toBn(data.amount, 9));
  //     const tx = await swapContract.swapGnet(toBn(data.amount, 9));
  //     const receipt = await tx.wait();
  //     return receipt;
  //   };

  return { ...store };
};
