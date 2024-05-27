import {
  ReactElement,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  Box,
  Table,
  Thead,
  Tbody,
  Th,
  Tr,
  Td,
  IconButton,
  VStack,
  Text,
  Button,
  Spinner,
} from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import { TradeExchangeContext } from ".";
import { useSwapP2PList } from "hooks/exchange/useSwapP2PList";
import { useTranslation } from "react-i18next";

export const ExchangeList = () => {
  const { t } = useTranslation();
  const [isExpand, setExpand] = useState(false);
  const { setState } = useContext(TradeExchangeContext);
  const tableWrapper = useRef<HTMLDivElement>(null);
  const { tokenSellList, isLoading: isLoadingList } = useSwapP2PList();

  const handleExpand = useCallback(() => {
    if (tableWrapper.current && isExpand) {
      tableWrapper.current.scroll({
        top: 0,
        behavior: "smooth",
      });
    }
    setExpand(!isExpand);
  }, [tableWrapper, isExpand]);

  if (isLoadingList) return <Spinner />;

  return (
    <>
      {!tokenSellList || !tokenSellList.length ? (
        <Text w={"full"} p={8} textAlign={"center"}>
          {t("exchange.exchangeList.emptyList")}
        </Text>
      ) : (
        <Box w={"full"} minH={"300px"}>
          <Box
            ref={tableWrapper}
            w={"full"}
            transition={"0.8s"}
            h={isExpand ? "260px" : "90px"}
            borderRadius="xl"
            overflowY={isExpand ? "auto" : "hidden"}
          >
            <Table>
              <Thead background={"gray.400"}>
                <Tr>
                  <Th color={"white"}>Rate</Th>
                  <Th color={"white"}>Amount</Th>
                </Tr>
              </Thead>
              <Tbody background={"gray.800"}>
                {tokenSellList.map(token => (
                  <Tr key={token.rate}>
                    <Td>
                      <Text
                        as={"span"}
                        textColor={"#A90AFF"}
                        fontWeight={"bold"}
                      >
                        {token.rate / 100}
                      </Text>
                      USDT :
                      <Text
                        as={"span"}
                        textColor={"#A90AFF"}
                        fontWeight={"bold"}
                      >
                        1
                      </Text>
                      XPC
                    </Td>
                    <Td>
                      <Text
                        as={"span"}
                        textColor={"#A90AFF"}
                        fontWeight={"bold"}
                      >
                        {token.amount}
                      </Text>
                      XPC
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </Box>
          {tokenSellList.length <= 0 ? (
            <IconButton
              w={"full"}
              variant="ghost"
              icon={
                isExpand ? (
                  <ChevronUpIcon fontSize={"2xl"} color={"white"} />
                ) : (
                  <ChevronDownIcon fontSize={"2xl"} color={"white"} />
                )
              }
              aria-label="expand button"
              onClick={handleExpand}
            />
          ) : null}
        </Box>
      )}
      <VStack w={"full"}>
        <Button
          w={"full"}
          variant={"primary"}
          isDisabled={!tokenSellList || !tokenSellList.length}
          onClick={() => setState("BUY_XPC")}
        >
          Buy
        </Button>
        <Button
          w={"full"}
          variant={"secondary"}
          onClick={() => setState("SELL_XPC")}
        >
          Sell
        </Button>
      </VStack>
    </>
  );
};
