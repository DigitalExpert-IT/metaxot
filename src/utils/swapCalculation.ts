import { toBn } from "evm-bn";

export const getXpcRate = (usdtAmount: string) => {
  if (+usdtAmount <= 0) return toBn("0");

  const ratePerXpc = toBn("1", 9); // 1 XPC : 1 USDT
  const xpcAmount = ratePerXpc.mul(usdtAmount);

  return xpcAmount;
};

export const getUsdtRate = (xpcAmount: string) => {
  if (+xpcAmount <= 0) return toBn("0");

  const ratePerUsdt = toBn("0.7", 6); // 0.7 USDT : 1 XPC
  const usdtAmount = ratePerUsdt.mul(xpcAmount);

  return usdtAmount;
};
