import { useEffect, useRef, useState } from "react";
import NiceModal, { useModal } from "@ebay/nice-modal-react";
import {
  Button,
  FormControl,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  Text,
  HStack,
  Stack,
  Box,
  Image,
  ModalOverlay,
} from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { t } from "i18next";
import useMarketApi from "hooks/metaxotGame/useMarketApi";
import { useSellNftMutation } from "hooks/market";
import { useAsyncCall } from "hooks/useAsyncCall";
import { INFTData } from "./NFTs";
import { toBn } from "evm-bn";

interface ISellForm {
  price: string;
}

export default NiceModal.create((nft: INFTData) => {
  const modal = useModal();
  const submitRef = useRef<any>(null);
  const [isCallSell, setCallSell] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm<ISellForm>();
  const { sellNft: sellNftApi } = useMarketApi();
  const onSubmit: SubmitHandler<ISellForm> = data => {
    sell(data.price);
  };

  const { mutateAsync, status } = useSellNftMutation();

  const handleSellContract = async (price: string) => {
    await mutateAsync(Number(nft.metadata.id) ?? 0, toBn(price, 9)).then(() =>
      setCallSell(true)
    );
  };

  const { exec: sell, isLoading } = useAsyncCall(
    handleSellContract,
    t("succes.successSellNft")
  );

  // Sell from Metaxot Game API
  useEffect(() => {
    const sellApi = async () => {
      if (!nft.result.Id) return;

      await sellNftApi(nft.result?.Id ?? "");
      setCallSell(false);
      handleModalClose();
    };

    if (status === "success" && isCallSell) {
      sellApi();
    }
  }, [status, isCallSell]);

  const handleModalClose = () => {
    modal.hide();
    resetField("price");
  };

  return (
    <Modal
      size={"2xl"}
      isOpen={modal.visible}
      onClose={handleModalClose}
      initialFocusRef={submitRef}
    >
      <ModalOverlay />
      <ModalContent
        borderRadius={"xl"}
        backgroundColor={"#3E4048"}
        border={"1px solid #73707D"}
        py={8}
      >
        <ModalCloseButton />
        <form onSubmit={handleSubmit(onSubmit)}>
          <ModalBody>
            <HStack gap={4}>
              <Box flex={1}>
                <Image
                  src={nft.image}
                  borderRadius={"2xl"}
                  alt="character"
                  fallbackSrc="https://via.placeholder.com/300"
                />
              </Box>
              <Stack flex={1}>
                <Text fontSize={"sm"}>Category: Lot</Text>
                <Text fontSize={"2xl"}>{nft.name}</Text>
                <Box>
                  <Text color={"brand.500"}>UID</Text>
                  <Text fontSize={"sm"}>{nft.result?.Id}</Text>
                </Box>
                <Box>
                  <Text color={"brand.500"}>Latitude</Text>
                  <Text fontSize={"sm"}>{nft.result?.Position.x}</Text>
                </Box>
                <Box>
                  <Text color={"brand.500"}>Longitude</Text>
                  <Text fontSize={"sm"}>{nft.result?.Position.y}</Text>
                </Box>
                <FormControl>
                  <Input
                    placeholder="Input Price"
                    {...register("price", { required: true })}
                  />
                  {errors.price && <span>Please input NFT price</span>}
                </FormControl>
              </Stack>
            </HStack>
          </ModalBody>

          <ModalFooter pb={0}>
            <Button
              ref={submitRef}
              type="submit"
              isLoading={isLoading || isCallSell}
              colorScheme="brand"
              w={"100%"}
            >
              {t("modal.sellNft.sell")}
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
});
