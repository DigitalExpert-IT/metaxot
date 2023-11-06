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

const Detail = () => {
  const { t } = useTranslation();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <LayoutMain title="Market">
      <Stack position={"relative"} maxW={"xs"} ml={"60%"} zIndex={"hide"}>
        <CircleGalaxy top={0} mt={"-30rem"} />
      </Stack>
      <Stack pb="24">
        <Stack direction={{ md: "row", base: "column" }} spacing="5">
          <Stack flex={1} spacing="0" overflow="hidden" onClick={onOpen}>
            <Image
              src="https://th.bing.com/th/id/OIG.Wz9RM4AS.VbkbTbfHSYO?pid=ImgGn"
              alt="caracter"
              rounded={"lg"}
            ></Image>
          </Stack>
          <Stack flex={2} justify="space-between">
            <Text fontSize={"2xl"} fontWeight="600">
              Miciko Mustain
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
            <Button>{t("common.buy")}</Button>
          </Stack>
        </Stack>
      </Stack>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalBody p="0" rounded={"lg"} overflow="hidden">
            <Image
              src="https://th.bing.com/th/id/OIG.Wz9RM4AS.VbkbTbfHSYO?pid=ImgGn"
              alt="caracter"
            ></Image>
          </ModalBody>
        </ModalContent>
      </Modal>
    </LayoutMain>
  );
};
export default Detail;
