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
import { useBuyPreMint } from "hooks/market/useBuyPreMint";
import { useTranslation } from "react-i18next";
import { useXpcContract } from "hooks/xpc/useXpcContract";
import { useAddress, useContractWrite } from "@thirdweb-dev/react";
import { useRouter } from "next/router";
import { MARKET_CONTRACT } from "constant/address";
import { useEffect } from "react";
import { toBn } from "evm-bn";
const CHAIN_ID = process.env.NEXT_PUBLIC_CHAIN_ID ?? "0x29a";

const Detail = () => {
  const buy = useBuyPreMint();
  const xpc = useXpcContract();
  const address = useAddress();
  const xpcApprove = useContractWrite(xpc.contract, "approve");
  const { t } = useTranslation();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();

  useEffect(() => {}, []);

  const buyAsync = async () => {
    const allowance = await xpc.contract?.call("allowance", [
      address,
      MARKET_CONTRACT[CHAIN_ID as "0x29a"],
    ]);
    if (allowance.gt()) {
      const approve = await xpcApprove.mutateAsync({
        args: [MARKET_CONTRACT[CHAIN_ID as "0x29a"], toBn("1000")],
      });
    }
    // if (approve.receipt.status === 1) {
    await buy.mutateAsync({
      args: [Number(router.query.idx)],
    });
    // }
  };

  return (
    <LayoutMain title="Market">
      <Stack position={"relative"} maxW={"xs"} ml={"60%"} zIndex={"hide"}>
        <CircleGalaxy top={0} mt={"-30rem"} />
      </Stack>
      <Stack pb="24">
        <Stack direction={{ md: "row", base: "column" }} spacing="5">
          <Stack flex={1} spacing="0" overflow="hidden" onClick={onOpen}>
            <Image
              src="https://ik.imagekit.io/msxxxaegj/metashot/lot_medium.png?updatedAt=1699335228063"
              alt="caracter"
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
                <Text>Rarity</Text>
                <Text>Role</Text>
                <Text>Health</Text>
                <Text>Strength</Text>
                <Text>Armor</Text>
              </Stack>
              <Stack
                flex={1}
                borderLeft={"1px solid"}
                borderColor="whiteAlpha.400"
                p="5"
              >
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
                </Stack>
              </Stack>
            </Stack>
            <Text>owned by 0x000sdkjd934j934</Text>
            <Text>30 XPC</Text>
            <Button onClick={buyAsync}>{t("common.buy")}</Button>
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
