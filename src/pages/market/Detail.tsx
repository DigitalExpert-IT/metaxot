import {
  Button,
  Image,
  Stack,
  Text,
  Modal,
  useDisclosure,
  ModalBody,
  ModalOverlay,
  ModalContent,
  HStack,
} from "@chakra-ui/react";
import { CircleGalaxy, LayoutMain } from "components";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
import { useBuyPreMintMutation, useListPreMintQuery } from "hooks/market";
import { useEffect, useState, useMemo } from "react";
import { fromBn } from "evm-bn";
import { useAsyncCall } from "hooks/useAsyncCall";
import { detail } from "./[id]";
import { useWallet } from "@thirdweb-dev/react";
import useMarketApi from "hooks/metaxotGame/useMarketApi";
import axRef from "hooks/metaxotGame/axiosRef";
import { generateUriPath } from "utils/uri";
import { CATEGORY_MAP } from "utils/uri";

const Detail = () => {
  const [detailNft, setDetailNft] = useState<detail | undefined | any>({});
  const [nftIndex, setNftIndex] = useState<string | any>(-1);
  const [isCallBuyApi, setIsCallBuyApi] = useState<boolean>(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { t } = useTranslation();
  const wallet = useWallet();

  const { data } = useListPreMintQuery();
  const { mutateAsync, status } = useBuyPreMintMutation();
  const { buyNft } = useMarketApi();
  const router = useRouter();
  const uuid = router.query?.id as string;
  const category = router.query?.category as string;

  const handleBuy = async () => {
    await mutateAsync(nftIndex ?? 0, detailNft.price).then(() =>
      setIsCallBuyApi(true)
    );
  };

  const { exec: buy, isLoading } = useAsyncCall(
    handleBuy,
    t("succes.successBuyNft")
  );

  // Buy from Metaxot Game API
  useEffect(() => {
    const buyApi = async () => {
      await buyNft(uuid as string);
      setIsCallBuyApi(false);
    };

    if (status === "success" && isCallBuyApi) {
      buyApi();
    }
  }, [status, isCallBuyApi]);

  useEffect(() => {
    if (!data || !uuid || !category) return;

    const metadata = async () => {
      const res = await axRef.get(generateUriPath(uuid, +category));
      const nftData = data.find((nft) => nft["1"] === uuid);

      setNftIndex(nftData && nftData["0"]);

      setDetailNft({ ...nftData, ...res.data });
    };

    metadata();
  }, [data, uuid, category]);

  return (
    <LayoutMain title={detailNft.name}>
      <Stack position={"relative"} maxW={"xs"} ml={"60%"} zIndex={"hide"}>
        <CircleGalaxy top={0} mt={"-30rem"} />
      </Stack>
      <Stack pb="24">
        <Stack direction={{ md: "row", base: "column" }} spacing="5">
          <Stack
            flex={1}
            spacing="0"
            overflow="hidden"
            cursor={"pointer"}
            onClick={onOpen}
            justifyContent="center"
          >
            <Image
              src={detailNft?.image}
              alt={detailNft?.name}
              fallbackSrc="https://via.placeholder.com/600"
              rounded={"lg"}
            ></Image>
          </Stack>
          <Stack flex={1} justify="space-between">
            <Text fontSize={"2xl"} fontWeight="600">
              {detailNft?.name}
            </Text>
            <Stack
              bg="whiteAlpha.300"
              rounded={"lg"}
              borderWidth="1px"
              borderStyle={"solid"}
              borderColor="whiteAlpha.400"
              p="4"
            >
              <HStack>
                <Text minW={"32"}>UUID</Text>
                <Text textTransform={"capitalize"}>{uuid}</Text>
              </HStack>
              <HStack>
                <Text minW={"32"}>Category</Text>
                <Text textTransform={"capitalize"}>
                  {CATEGORY_MAP[detailNft?.category]}
                </Text>
              </HStack>
              <HStack>
                <Text minW={"32"}>Is Rentalable</Text>
                <Text>{detailNft?.isRentalAble ? "Yes" : "No"}</Text>
              </HStack>
            </Stack>
            <Stack justify="space-between">
              <Text fontWeight={"bold"}>
                {fromBn(detailNft?.price ?? 0, 9)} XPC
              </Text>
              <Button
                onClick={buy}
                isLoading={isLoading}
                isDisabled={detailNft?.isSold}
              >
                {detailNft?.isSold
                  ? t("common.sold")
                  : wallet
                  ? t("common.buy")
                  : t("common.connectWallet")}
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalBody p="0" rounded={"lg"} overflow="hidden">
            <Image src={detailNft.picture} alt={detailNft.picture}></Image>
          </ModalBody>
        </ModalContent>
      </Modal>
    </LayoutMain>
  );
};

export default Detail;
