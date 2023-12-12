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
} from "@chakra-ui/react";
import { CircleGalaxy, LayoutMain } from "components";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
import { useBuyPreMintMutation, useListPreMintQuery } from "hooks/market";
import { useEffect, useState, useMemo } from "react";
import { fromBn } from "evm-bn";
import { ZERO_ADDRESS } from "constant/dummyResAPI";
import { shortenAddress } from "utils";
import { useAsyncCall } from "hooks/useAsyncCall";
import { detail } from "./[idx]";
import { useWallet } from "@thirdweb-dev/react";
import { DUMMY_JSON } from "constant/dummyResAPI";
import useMarketApi from "hooks/metaxotGame/useMarketApi";

export const Detail = () => {
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
  const uuid = router.query?.idx;

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

  const dataNFT = useMemo(() => {
    return DUMMY_JSON.find(j => j.uuid === uuid);
  }, [data, uuid]);

  useEffect(() => {
    if (!data || !router.query.idx || !router.isReady) return;
    setDetailNft(
      data?.find((e, index) => {
        if (e["0"] == uuid) {
          setNftIndex(index);
          return true;
        }
      })
    );
  }, [data]);

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
              // src="https://ik.imagekit.io/msxxxaegj/metashot/lot_medium.png?updatedAt=1699335228063"
              src={dataNFT?.picture}
              alt={dataNFT?.name}
              rounded={"lg"}
            ></Image>
          </Stack>
          <Stack flex={2} justify="space-between">
            <Text fontSize={"2xl"} fontWeight="600">
              {dataNFT?.name}
            </Text>
            <Stack
              bg="whiteAlpha.300"
              rounded={"lg"}
              borderWidth="1px"
              borderStyle={"solid"}
              borderColor="whiteAlpha.400"
              direction={"row"}
              py="2"
            >
              <Stack flex={1} p="5">
                {Object.keys(detailNft).map((e, i) => {
                  if (i <= 5 || e === "picture" || e === "bg" || e === "price")
                    return;
                  return <Text key={i}>{e}</Text>;
                })}
              </Stack>
              <Stack
                flex={1}
                borderLeft={"1px solid"}
                borderColor="whiteAlpha.400"
                p="5"
              >
                {Object.values(detailNft).map((e, i) => {
                  if (
                    i <= 5 ||
                    e === detailNft.picture ||
                    e === detailNft.bg ||
                    e === detailNft.price
                  )
                    return;
                  return (
                    <Text key={i} fontSize={i <= 6 ? "xs" : "md"}>
                      {String(e)}
                    </Text>
                  );
                })}
                {/* 
                <Text>Rare</Text>
            <Text>Arcer</Text>
            <Stack direction={"row"} alignItems="center">
              <Progress flex={1} hasStripe value={64} />
              <Text>64</Text>
            </Stack>
            <Stack direction={"row"} alignItems="center">
              <Progress flex={1} hasStripe value={10} />
              <Text>10</Text>
            </Stack>
            <Stack direction={"row"} alignItems="center">
              <Progress flex={1} hasStripe value={5} />
              <Text>5</Text>
            </Stack> */}
              </Stack>
            </Stack>
            <Stack direction={"row"} justify="space-between">
              <Text color={"whiteAlpha.500"} fontSize="xs">
                owned by {shortenAddress(ZERO_ADDRESS)}
              </Text>
              <Text fontWeight={"bold"}>
                {fromBn(detailNft?.price ?? 0, 9)} XPC
              </Text>
            </Stack>
            <Button onClick={buy} isLoading={isLoading}>
              {wallet ? t("common.buy") : t("common.connectWallet")}
            </Button>
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
