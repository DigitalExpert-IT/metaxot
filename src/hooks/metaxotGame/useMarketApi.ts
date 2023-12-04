import { useAsyncCall } from "hooks/useAsyncCall";
import axRef from "./axiosRef";
import useAuth from "./useAuth";
import { useTranslation } from "react-i18next";

const useMarketApi = () => {
  const { t } = useTranslation();
  const { userData } = useAuth();

  const { exec: buyNft, isLoading: isLoadingBuy } = useAsyncCall(
    async (lot_uid: string) => {
      await axRef
        .get(`/buy_lot?owner_uid=${userData?.uid}&lot_uid=${lot_uid}`)
        .then(response => {
          const data = response.data.result;

          return { data, successMessage: t("succes.successTransferToGame") };
        })
        .catch(error => {
          throw new Error(`error buy nft ${error?.message}`);
        });
    }
  );

  const { exec: sellNft, isLoading: isLoadingSell } = useAsyncCall(
    async (lot_uid: string) => {
      await axRef
        .get(`/sell_lot?lot_uid=${lot_uid}`)
        .then(response => {
          const data = response.data.result;

          return { data, successMessage: t("succes.successSellNft") };
        })
        .catch(error => {
          throw new Error(`error buy nft ${error?.message}`);
        });
    }
  );

  return {
    buyNft,
    sellNft,
    isLoading: isLoadingBuy || isLoadingSell,
  };
};

export default useMarketApi;
