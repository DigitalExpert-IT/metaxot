import { ReactElement, useCallback, useContext, useRef, useState } from "react";
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
  Button,
} from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import { TradeExchangeContext } from ".";

export const ExchangeList = () => {
  const [isExpand, setExpand] = useState(false);
  const { setState } = useContext(TradeExchangeContext);
  const tableWrapper = useRef<HTMLDivElement>(null);

  const handleExpand = useCallback(() => {
    if (tableWrapper.current && isExpand) {
      tableWrapper.current.scroll({
        top: 0,
        behavior: "smooth",
      });
    }
    setExpand(!isExpand);
  }, [tableWrapper, isExpand]);

  return (
    <>
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
              <Tr>
                <Td>1USDT : 1XPC</Td>
                <Td>30.000XPC</Td>
              </Tr>
              <Tr>
                <Td>1USDT : 1XPC</Td>
                <Td>30.000XPC</Td>
              </Tr>
              <Tr>
                <Td>1USDT : 1XPC</Td>
                <Td>30.000XPC</Td>
              </Tr>
              <Tr>
                <Td>1USDT : 1XPC</Td>
                <Td>30.000XPC</Td>
              </Tr>
              <Tr>
                <Td>1USDT : 1XPC</Td>
                <Td>30.000XPC</Td>
              </Tr>
              <Tr>
                <Td>1USDT : 1XPC</Td>
                <Td>30.000XPC</Td>
              </Tr>
              <Tr>
                <Td>1USDT : 1XPC</Td>
                <Td>30.000XPC</Td>
              </Tr>
              <Tr>
                <Td>1USDT : 1XPC</Td>
                <Td>30.000XPC</Td>
              </Tr>
            </Tbody>
          </Table>
        </Box>
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
      </Box>
      <VStack w={"full"}>
        <Button
          w={"full"}
          variant={"primary"}
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
