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
  Divider,
  Box,
} from "@chakra-ui/react";
import { CircleGalaxy, LayoutMain } from "components";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
import { useBuyMutation, useListNftSalesQuery } from "hooks/market";
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

  const { data } = useListNftSalesQuery();
  const { mutateAsync, status } = useBuyMutation();
  const { buyNft } = useMarketApi();
  const router = useRouter();
  const id = router.query?.id as string;
  const uuid = router.query?.uuid as string;
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
      router.replace("/profile");
    }
  }, [status, isCallBuyApi]);

  useEffect(() => {
    if (!data || !id || !uuid || !category) return;

    const metadata = async () => {
      const res = await axRef.get(generateUriPath(uuid, +category));
      const nftData = data.find((nft) => Number(nft["0"]) === +id);

      setNftIndex(nftData && nftData["0"]);

      setDetailNft({ ...nftData, ...res.data });
    };

    metadata();
  }, [data, id, uuid, category]);

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
              maxW={"30rem"}
              ml={{ base: "0", sm: "5rem" }}
              rounded={"lg"}
              pos={"relative"}
            ></Image>
          </Stack>
          <Stack flex={1}>
            <HStack justifyContent={"space-between"}>
              <Text fontSize={"2xl"} fontWeight="600">
                {detailNft?.name}
              </Text>
              <Text fontSize={"sm"} fontWeight="300" color={"grey"}>
                owned by {detailNft?.owner}
              </Text>
            </HStack>
            <HStack
              bg="whiteAlpha.300"
              rounded={"lg"}
              borderWidth="1px"
              borderStyle={"solid"}
              borderColor="whiteAlpha.400"
              p="4"
              gap={3}
            >
              <Stack>
                <Text minW={"32"}>UUID</Text>
                <Text minW={"32"}>Category</Text>
                <Text minW={"32"}>Name</Text>
              </Stack>
              <Divider
                borderColor={"white"}
                borderRadius={"2px"}
                orientation="vertical"
              />
              <Stack>
                <Text textTransform={"capitalize"}>{uuid}</Text>
                <Text textTransform={"capitalize"}>
                  {CATEGORY_MAP[detailNft?.category]}
                </Text>
                <Text>{detailNft?.name}</Text>
              </Stack>
            </HStack>
            <HStack justify="space-between">
              <Text fontSize={"xl"}>Price</Text>
              <Text fontWeight={"bold"}>
                {fromBn(detailNft?.price ?? 0, 9)} XPC
              </Text>
            </HStack>
          </Stack>
        </Stack>
        <Box textAlign={"center"} pt={8}>
          <Button
            margin={"auto"}
            minW={{ base: "100%", sm: "412px" }}
            maxW={"412px"}
            minH={"68px"}
            borderRadius={15}
            bgGradient={"linear(to-l, #5984F3, #A442E8)"}
            bgClip="button"
            _hover={{
              bgGradient: "linear(to-l, #5984F3, #A442E8)",
            }}
            fontSize={"xl"}
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
        </Box>
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
