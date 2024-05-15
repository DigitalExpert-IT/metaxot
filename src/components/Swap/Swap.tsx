import NiceModal, { useModal } from "@ebay/nice-modal-react";
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
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
  VStack,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import TokenInput from "./TokenInput";
import { useState, useCallback } from "react";
import TokenList, { TokenListType } from "components/Swap/TokenList";
import { useUsdtBalanceQuery } from "hooks/usdt/useUsdtBalanceQuery";
import { useBalanceQuery } from "hooks/xpc/useXpcBalanceQuery";
import { SWAP_CONTRACT, USDT_CONTRACT, XPC_CONTRACT } from "constant/address";
import { CURRENT_CHAIN_ID } from "lib/contractFactory";
import { TradeXpc } from "./TradeXpc";
import _ from "lodash";
import { getXpcRate, getUsdtRate } from "utils/swapCalculation";
import { fromBn, toBn } from "evm-bn";
import { useAsyncCall } from "hooks";
import { BigNumber } from "ethers";
import { useUsdtApproveMutation } from "hooks/usdt";
import { useApproveMutation as useXpcApproveMutation } from "hooks/xpc";
import { useSwapUsdtMutation, useSwapXpcMutation } from "hooks/exchange";
import { USDT_LOGO } from "constant/tokenLogo";

export const dummyTokenList = [
  {
    name: "USDT",
    address: USDT_CONTRACT[CURRENT_CHAIN_ID],
    iconUrl: USDT_LOGO,
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
  const { control, getValues, setValue, resetField, reset, handleSubmit } =
    useForm();
  const usdtBalanceQuery = useUsdtBalanceQuery();
  const xpcBalanceQuery = useBalanceQuery();

  const usdtBalance = Number(usdtBalanceQuery?.data?.displayValue);
  const xpcBalance = Number(xpcBalanceQuery?.data?.displayValue);

  const [sourceToken, setSourceToken] = useState(dummyTokenList[0]);
  const [destinationToken, setDestinationToken] = useState(dummyTokenList[1]);

  const [showTokenList, setShowTokenList] = useState("");

  const { mutateAsync: mutateAsyncUsdtApprove } = useUsdtApproveMutation();
  const { mutateAsync: mutateAsyncXpcApprove } = useXpcApproveMutation();
  const swapUsdt = useSwapUsdtMutation();
  const swapXpc = useSwapXpcMutation();

  const sourceBalance = sourceToken.name === "USDT" ? usdtBalance : xpcBalance;
  const destinationBalance =
    destinationToken.name === "USDT" ? usdtBalance : xpcBalance;

  const onSelectNewToken = (token: TokenListType) => {
    showTokenList === "source"
      ? setSourceToken(token)
      : setDestinationToken(token);
    setShowTokenList("");
  };

  const calculateSwap = useCallback(
    _.debounce(() => {
      const { source } = getValues();

      if (destinationToken.name == "USDT") {
        setValue("destination", fromBn(getUsdtRate(`${source}`), 6));
      } else {
        setValue("destination", fromBn(getXpcRate(`${source}`), 9));
      }
    }, 700),
    [destinationToken]
  );

  const swapCurrency = () => {
    setSourceToken(destinationToken);
    setDestinationToken(sourceToken);
    resetField("source");
    resetField("destination");
  };

  const swap = async (data: { currency: string; amount: BigNumber }) => {
    const swapToUSDT = data.currency === "USDT";
    const swapAddress = SWAP_CONTRACT[CURRENT_CHAIN_ID];

    if (swapToUSDT) {
      await mutateAsyncXpcApprove({ args: [swapAddress, data.amount] });

      const swap = await swapXpc.mutateAsync({
        args: [data.amount],
      });

      const receipt = swap.receipt;
      return receipt;
    }

    await mutateAsyncUsdtApprove({ args: [swapAddress, data.amount] });
    const swap = await swapUsdt.mutateAsync({
      args: [data.amount],
    });
    const receipt = swap.receipt;
    return receipt;
  };

  const { exec, isLoading: isSwapLoading } = useAsyncCall(
    swap,
    "Success swap token"
  );

  const onSubmit = handleSubmit(async data => {
    const swap = await exec({
      currency: destinationToken.name,
      amount: toBn(data.source, destinationToken.name === "USDT" ? 9 : 6),
    });

    if (swap.status === 1) {
      reset();
      xpcBalanceQuery.refetch();
      usdtBalanceQuery.refetch();
    }
  });

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
                  <VStack as={"form"} onSubmit={onSubmit}>
                    <Box my={6}>
                      <Text fontSize={"large"} as={"label"}>
                        From
                      </Text>
                      <TokenInput
                        name={"source"}
                        origin={"source"}
                        selectedToken={sourceToken}
                        control={control}
                        onKeyUp={calculateSwap}
                        placeholder="Enter amount here"
                      />
                      <Text
                        textAlign={"right"}
                        fontSize={"small"}
                        color={"#A4A4BE"}
                      >
                        Balance: {sourceBalance}
                      </Text>
                    </Box>
                    <Button onClick={swapCurrency}>
                      <Image src={"/assets/icon/swap.png"} alt={"Swap icon"} />
                    </Button>
                    <Box pb={8}>
                      <Text fontSize={"large"} as={"label"}>
                        To
                      </Text>
                      <TokenInput
                        name={"destination"}
                        origin={"destination"}
                        selectedToken={destinationToken}
                        control={control}
                        disabled={true}
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
                      type="submit"
                      bgGradient={"linear(to-tr, #706AF5, #A90AFF)"}
                      w={"100%"}
                      isLoading={isSwapLoading}
                    >
                      SWAP
                    </Button>
                  </VStack>
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
