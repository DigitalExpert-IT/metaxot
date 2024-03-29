import NiceModal, { useModal } from "@ebay/nice-modal-react";
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Text,
  Box,
  Image,
} from "@chakra-ui/react";
import TokenInput from "./TokenInput";
import { useState } from "react";

export const dummyTokenData = [
  {
    name: "BNB",
    balance: 0,
    iconUrl: "https://cryptologos.cc/logos/bnb-bnb-logo.png",
  },
  {
    name: "SOL",
    balance: 500,
    iconUrl: "https://cryptologos.cc/logos/solana-sol-logo.png",
  },
];

export default NiceModal.create(() => {
  const modal = useModal();
  const handleModalClose = () => {
    modal.hide();
  };
  const [sourceToken, setSourceToken] = useState("");
  const [destinationToken, setDestinationToken] = useState("");
  const sourceBalance =
    dummyTokenData.find(token => token.name === sourceToken)?.balance ?? 0;
  const destinationBalance =
    dummyTokenData.find(token => token.name === destinationToken)?.balance ?? 0;

  return (
    <Modal isOpen={modal.visible} onClose={handleModalClose}>
      <ModalContent
        position={"absolute"}
        top={30}
        left={{ md: "unset", lg: "60%" }}
        py={16}
        borderRadius={10}
      >
        <ModalHeader
          position={"absolute"}
          top={"1"}
          py={6}
          px={6}
          textAlign={"left"}
          borderBottom={"1px solid #424343"}
          w={"100%"}
        >
          SWAP
        </ModalHeader>
        <ModalCloseButton top={"5"} py={6} px={6} />
        <ModalBody pb={6}>
          <Box my={6}>
            <Text ml={5} fontSize={"large"} as={"label"}>
              From
            </Text>
            <TokenInput
              tokenList={dummyTokenData}
              onChangeAmount={tokenAmount => {}}
              onChangeToken={token => setSourceToken(token.target.value)}
            />
            <Text textAlign={"right"} fontSize={"small"} color={"#A4A4BE"}>
              Balance: {sourceBalance}
            </Text>
          </Box>
          <Box display={"flex"} justifyContent={"center"}>
            <Image src={"/assets/icon/swap.png"} alt={"Swap icon"} />
          </Box>
          <Box>
            <Text ml={5} fontSize={"large"} as={"label"}>
              To
            </Text>
            <TokenInput
              tokenList={dummyTokenData}
              onChangeAmount={tokenAmount => {}}
              onChangeToken={token => setDestinationToken(token.target.value)}
            />
            <Text textAlign={"right"} fontSize={"small"} color={"#A4A4BE"}>
              Balance: {destinationBalance}
            </Text>
          </Box>
        </ModalBody>
        <ModalFooter>
          <Button
            type="button"
            bgGradient={"linear(to-tr, #706AF5, #A90AFF)"}
            w={"100%"}
          >
            SWAP
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
});
