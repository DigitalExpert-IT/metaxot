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
  const { contract: usdtContract } = useUsdtContract();

  const sell = async (rate: number, amount: number) => {
    try {
      const feeTransaction = BigInt(
        ((rate * amount * 125 * 10 ** 9) / 10000000) * 2
      );
      const allowance = await xpcContract?.call("allowance", [
        address,
        contract?.getAddress(),
      ]);
      console.log("allowance", allowance, " address:", contract?.getAddress());

      if (allowance.lte(toBn(amount.toString(), 9).add(feeTransaction))) {
        await mutateAsyncApprove({
          args: [
            contract?.getAddress(),
            toBn(amount.toString(), 9).add(feeTransaction),
          ],
        });

        const allowance2 = await xpcContract?.call("allowance", [
          address,
          contract?.getAddress(),
        ]);
        console.log("after approve allowance", allowance2);
      }

      const sellContract = await contract?.call("sellXpc", [rate, amount]);
    } catch (error) {
      throw error;
    }
  };

  const { exec: sellXpc, isLoading } = useAsyncCall(sell, t("succes.sellXpc"));

  return { sellXpc, isLoading };
};
