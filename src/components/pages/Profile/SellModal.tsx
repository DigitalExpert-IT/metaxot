import { ReactElement, useEffect, useRef, useState } from "react";
import NiceModal, { useModal } from "@ebay/nice-modal-react";
import {
  Button,
  FormControl,
  FormLabel,
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
import { INftMetadata } from "hooks/nft";
import { useAsyncCall } from "hooks/useAsyncCall";
import { toBn } from "evm-bn";

interface ISellForm {
  price: string;
}

export default NiceModal.create((metadata: INftMetadata) => {
  const modal = useModal();
  const submitRef = useRef<any>(null);
  const [sellNftUid, setSellNftUid] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm<ISellForm>();
  const { sellNft: sellNftApi } = useMarketApi();
  const onSubmit: SubmitHandler<ISellForm> = data => {
    console.log("Metamask data", data);
    console.log("=========== Metamask metadata:", metadata);
    sell(data.price);
  };

  const { mutateAsync, status } = useSellNftMutation();

  const handleSellContract = async (price: string) => {
    await mutateAsync(Number(metadata.id) ?? 0, toBn(`${price}`, 9)).then(() =>
      setSellNftUid(metadata.uri.substring(metadata.uri.lastIndexOf("=") + 1))
    );
  };

  const { exec: sell, isLoading } = useAsyncCall(
    handleSellContract,
    t("succes.successSellNft")
  );

  // Sell from Metaxot Game API
  useEffect(() => {
    const sellApi = async () => {
      await sellNftApi(sellNftUid ?? "");
      setSellNftUid(null);
      handleModalClose();
    };

    if (status === "success" && sellNftUid) {
      sellApi();
    }
  }, [status, sellNftUid]);

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
              <Box>
                <Image
                  //   src={e.picture}
                  borderRadius={"2xl"}
                  alt="character"
                  fallbackSrc="https://via.placeholder.com/300"
                />
              </Box>
              <Stack>
                <Text fontSize={"sm"}>Category: Lot</Text>
                <Text fontSize={"2xl"}>LOT NFT</Text>
                <Box>
                  <Text color={"brand.500"}>UID</Text>
                  <Text fontSize={"sm"}>
                    550e8400-e29b-41d4-a716-446655440000
                  </Text>
                </Box>
                <Box>
                  <Text color={"brand.500"}>Latitude</Text>
                  <Text fontSize={"sm"}>40.41789675</Text>
                </Box>
                <Box>
                  <Text color={"brand.500"}>Longitude</Text>
                  <Text fontSize={"sm"}>172.012902902029</Text>
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
              isLoading={isLoading}
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
