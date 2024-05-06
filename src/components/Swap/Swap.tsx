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
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  TabProps,
} from "@chakra-ui/react";
import TokenInput from "./TokenInput";
import { useState } from "react";
import TokenList, { TokenListType } from "components/Swap/TokenList";
import { useUsdtBalanceQuery } from "hooks/usdt/useUsdtBalanceQuery";
import { useBalanceQuery } from "hooks/xpc/useXpcBalanceQuery";
import { USDT_CONTRACT, XPC_CONTRACT } from "constant/address";
import { CURRENT_CHAIN_ID } from "lib/contractFactory";
import { TradeXpc } from "./TradeXpc";

export const dummyTokenList = [
  {
    name: "USDT",
    address: USDT_CONTRACT[CURRENT_CHAIN_ID],
    iconUrl: "https://cryptologos.cc/logos/tether-usdt-logo.png",
  },
  {
    name: "XPC",
    address: XPC_CONTRACT[CURRENT_CHAIN_ID],
    iconUrl: undefined,
  },
];

const TabButton = (props: TabProps) => {
  return (
    <Tab
      width={"100%"}
      borderRadius={8}
      color={"white"}
      background={"#424343"}
      _selected={{ backgroundColor: "#6779F3", color: "#fff" }}
    >
      {props.children}
    </Tab>
  );
};

export default NiceModal.create(() => {
  const modal = useModal();
  const handleModalClose = () => {
    modal.hide();
  };
  const usdtBalanceQuery = useUsdtBalanceQuery();
  const xpcBalanceQuery = useBalanceQuery();
  const usdtBalance = Number(usdtBalanceQuery?.data?.displayValue);
  const xpcBalance = Number(xpcBalanceQuery?.data?.displayValue);
  const [sourceToken, setSourceToken] = useState(dummyTokenList[0]);
  const [destinationToken, setDestinationToken] = useState(dummyTokenList[1]);
  const [showTokenList, setShowTokenList] = useState("");

  const sourceBalance = sourceToken.name === "USDT" ? usdtBalance : xpcBalance;
  const destinationBalance =
    destinationToken.name === "USDT" ? usdtBalance : xpcBalance;

  const onSelectNewToken = (token: TokenListType) => {
    showTokenList === "source"
      ? setSourceToken(token)
      : setDestinationToken(token);
    setShowTokenList("");
  };

  return (
    <Modal isOpen={modal.visible} onClose={handleModalClose}>
      <ModalContent
        position={"absolute"}
        top={30}
        left={{ md: "unset", lg: "60%" }}
        pt={16}
        borderRadius={10}
      >
        <Tabs variant="soft-rounded" colorScheme="green">
          <ModalHeader
            position={"absolute"}
            top={"1"}
            py={6}
            px={6}
            textAlign={"left"}
            w={"100%"}
          >
            <Text mb={5}>SWAP</Text>
            <TabList borderRadius={8} color={"white"} background={"#424343"}>
              <TabButton>Exchange</TabButton>
              <TabButton>Trade Exchange</TabButton>
            </TabList>
          </ModalHeader>
          <ModalCloseButton top={"5"} py={6} px={6} />
          <ModalBody py={8} px={4}>
            <TabPanels>
              <TabPanel>
                {showTokenList ? (
                  <Box my={6}>
                    <TokenList
                      tokenList={dummyTokenList}
                      onSelectToken={onSelectNewToken}
                    />
                  </Box>
                ) : (
                  <>
                    <Box my={6}>
                      <Text fontSize={"large"} as={"label"}>
                        From
                      </Text>
                      <TokenInput
                        origin={"source"}
                        selectedToken={sourceToken}
                        onChangeAmount={tokenAmount => {}}
                        onClickToken={origin => {
                          setShowTokenList(origin);
                        }}
                      />
                      <Text
                        textAlign={"right"}
                        fontSize={"small"}
                        color={"#A4A4BE"}
                      >
                        Balance: {sourceBalance}
                      </Text>
                    </Box>
                    <Box display={"flex"} justifyContent={"center"}>
                      <Image src={"/assets/icon/swap.png"} alt={"Swap icon"} />
                    </Box>
                    <Box>
                      <Text fontSize={"large"} as={"label"}>
                        To
                      </Text>
                      <TokenInput
                        origin={"destination"}
                        selectedToken={destinationToken}
                        onChangeAmount={tokenAmount => {}}
                        onClickToken={origin => {
                          setShowTokenList(origin);
                        }}
                      />
                      <Text
                        textAlign={"right"}
                        fontSize={"small"}
                        color={"#A4A4BE"}
                      >
                        Balance: {destinationBalance}
                      </Text>
                    </Box>
                    <Button
                      type="button"
                      bgGradient={"linear(to-tr, #706AF5, #A90AFF)"}
                      w={"100%"}
                      mt={8}
                    >
                      SWAP
                    </Button>
                  </>
                )}
              </TabPanel>
              <TabPanel>
                <TradeXpc />
              </TabPanel>
            </TabPanels>
          </ModalBody>
        </Tabs>
      </ModalContent>
    </Modal>
  );
});
