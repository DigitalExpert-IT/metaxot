import { useAsyncCall } from "hooks/useAsyncCall";
import { useSwapContract } from "./useSwapContract";
import { t } from "i18next";
import { useApproveMutation, useXpcContract } from "hooks/xpc";
import { useUsdtContract } from "hooks/usdt";
import { useAddress } from "@thirdweb-dev/react";
import { ZERO_ADDRESS } from "constant/address";
import { toBn } from "evm-bn";

export const useSellXpcMutation = () => {
  const address = useAddress() ?? ZERO_ADDRESS;
  const { contract } = useSwapContract();
  const { contract: xpcContract } = useXpcContract();
  const { mutateAsync: mutateAsyncApprove } = useApproveMutation();

  const sell = async (rate: number, amount: number) => {
    try {
      const feeTransaction = BigInt(
        ((rate * amount * 125 * 10 ** 9) / 10000000) * 2
      );
      const allowance = await xpcContract?.call("allowance", [
        address,
        contract?.getAddress(),
      ]);

      if (allowance.lte(toBn(amount.toString(), 9).add(feeTransaction))) {
        await mutateAsyncApprove({
          args: [
            contract?.getAddress(),
            toBn(amount.toString(), 9).add(feeTransaction),
          ],
        });
      }

      const { receipt } = await contract?.call("sellXpc", [rate, amount]);
      return receipt;
    } catch (error) {
      throw error;
    }
  };

  const { exec: sellXpc, isLoading } = useAsyncCall(sell, t("succes.sellXpc"));

  return { sellXpc, isLoading };
};
