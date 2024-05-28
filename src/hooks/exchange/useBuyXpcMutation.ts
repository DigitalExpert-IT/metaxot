import { useAsyncCall } from "hooks/useAsyncCall";
import { useSwapContract } from "./useSwapContract";
import { t } from "i18next";
import { useUsdtContract, useUsdtApproveMutation } from "hooks/usdt";
import { useAddress } from "@thirdweb-dev/react";
import { ZERO_ADDRESS } from "constant/address";
import { toBn } from "evm-bn";
import { TRateList } from "./useCheapestRateList";

export const useBuyXpcMutation = () => {
  const address = useAddress() ?? ZERO_ADDRESS;
  const { contract } = useSwapContract();
  const { mutateAsync: mutateAsyncApprove } = useUsdtApproveMutation();
  const { contract: usdtContract } = useUsdtContract();

  const buy = async (rateList: TRateList, amount: number) => {
    try {
      const rates = rateList?.map(item => item.rate) ?? [];
      const feeTransaction =
        rateList?.reduce(
          (acc, item) =>
            (acc += BigInt(
              (item.rate * item.amount * 25 * 10 ** 9) / 10000000
            )),
          BigInt(0)
        ) ?? BigInt(0);

      const allowance = await usdtContract?.call("allowance", [
        address,
        contract?.getAddress(),
      ]);

      if (allowance.lte(toBn(amount.toString(), 6).add(feeTransaction))) {
        await mutateAsyncApprove({
          args: [
            contract?.getAddress(),
            toBn(amount.toString(), 6).add(feeTransaction),
          ],
        });
      }

      const { receipt } = await contract?.call("buyXpc", [rates, amount]);
      return receipt;
    } catch (error) {
      throw error;
    }
  };

  const { exec: buyXpc, isLoading } = useAsyncCall(buy, t("succes.buyXpc"));

  return { buyXpc, isLoading };
};
