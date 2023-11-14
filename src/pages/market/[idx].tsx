import {
  Button,
  Image,
  Progress,
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
import { useListPreMintQuery } from "hooks/market";
import { useEffect, useMemo, useState } from "react";
import { BigNumber, ethers } from "ethers";
import { fromBn } from "evm-bn";
import { ZERO_ADDRESS } from "constant/dummyResAPI";
import { shortenAddress } from "utils";
import { isNumber } from "lodash";

interface detail {
  bg: string;
  category: BigNumber;
  isRentalAble: true;
  isSold: boolean;
  latitude: string;
  longitude: string;
  name: string;
  picture: string;
  price: BigNumber;
  rentId: BigNumber;
  uuid: string;
}

const Detail = () => {
  const { data } = useListPreMintQuery();
  const [detailNft, setDetailNft] = useState<detail | undefined | any>({});
  const { t } = useTranslation();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();

  useEffect(() => {
    if (!data || !router.query.idx || !router.isReady) return;
    setDetailNft(data?.at(+router?.query?.idx ?? 0));
  }, [data]);

  console.log(Object.values(detailNft));

  return (
    <LayoutMain title="Market">
      <Stack position={"relative"} maxW={"xs"} ml={"60%"} zIndex={"hide"}>
        <CircleGalaxy top={0} mt={"-30rem"} />
      </Stack>
      <Stack pb="24">
        <Stack direction={{ md: "row", base: "column" }} spacing="5">
          <Stack flex={1} spacing="0" overflow="hidden" onClick={onOpen}>
            <Image
              // src="https://ik.imagekit.io/msxxxaegj/metashot/lot_medium.png?updatedAt=1699335228063"
              src={detailNft?.picture}
              alt={detailNft?.name}
              rounded={"lg"}
            ></Image>
          </Stack>
          <Stack flex={2} justify="space-between">
            <Text fontSize={"2xl"} fontWeight="600">
              Medium Lot
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
                  return <Text key={i}>{String(e)}</Text>;
                })}
                {/* <Text>Rare</Text>
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
            <Button>{t("common.buy")}</Button>
          </Stack>
        </Stack>
      </Stack>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalBody p="0" rounded={"lg"} overflow="hidden">
            <Image
              src="https://ik.imagekit.io/msxxxaegj/metashot/lot_medium.png?updatedAt=1699335228063"
              alt="caracter"
            ></Image>
          </ModalBody>
        </ModalContent>
      </Modal>
    </LayoutMain>
  );
};
export default Detail;
