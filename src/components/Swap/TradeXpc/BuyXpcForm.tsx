import { KeyboardEvent, FocusEvent, useContext, useState, useRef } from "react";
import {
  Box,
  Button,
  Input,
  VStack,
  Text,
  Spinner,
  HStack,
  Divider,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Tfoot,
  Td,
  Stack,
} from "@chakra-ui/react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { TradeExchangeContext } from ".";
import { useCheapestRateList } from "hooks/exchange/useCheapestRateList";
import { useBuyXpcMutation } from "hooks/exchange";

export const BuyXpcForm = () => {
  const { setState } = useContext(TradeExchangeContext);
  const [value, setValue] = useState<number>(0);
  const tableWrapper = useRef<HTMLDivElement>(null);
  const { data, isLoading, error } = useCheapestRateList(value);
  const { buyXpc, isLoading: isLoadingBuy } = useBuyXpcMutation();
  const { t } = useTranslation();

  const handleBuy = async () => {
    await buyXpc(data.rateList ?? [], value);
  };

  return (
    <>
      <Box w={"full"}>
        <Box
          display={"flex"}
          flexDir={"row"}
          borderRadius={15}
          background={"#424343"}
          my={2}
        >
          <Box
            display={"flex"}
            flexDir={"row"}
            alignItems={"center"}
            justifyContent={"center"}
            backgroundColor={"#6779F3"}
            borderRadius={15}
            px={8}
          >
            <Image
              src={"/assets/icon/xpc_token.png"}
              alt="XPC TOKEN"
              width={32}
              height={32}
            />
            <Text ml={2} fontWeight={"bold"}>
              XPC
            </Text>
          </Box>
          <Input
            minH={50}
            background={"transparent"}
            _focus={{ background: "transparent", border: "unset" }}
            _hover={{ background: "transparent" }}
            type="number"
            onChange={e => setValue(+e.target.value)}
            placeholder="Enter amount here"
          />
        </Box>
      </Box>
      {isLoading ? (
        <Spinner />
      ) : error ? (
        <Text color={"red"} textAlign={"center"} pb={4}>
          {error}
        </Text>
      ) : data.rateList && value ? (
        <Stack w={"full"}>
          <Text alignSelf={"left"}>
            {t("exchange.buyXpc.cheapestRateResult.title")}
          </Text>
          <Box p={2}>
            <Table borderRadius={"xl"} overflow={"hidden"}>
              <Thead background={"#6779F3"}>
                <Tr>
                  <Th color={"white"}>Rate</Th>
                  <Th color={"white"}>Amount</Th>
                </Tr>
              </Thead>
              <Tbody background={"white"}>
                {data.rateList.map(token => (
                  <Tr key={token.rate} color={"black"}>
                    <Td>
                      <Text
                        as={"span"}
                        textColor={"#A90AFF"}
                        fontWeight={"bold"}
                      >
                        {token.rate / 100}
                      </Text>
                      USDT : {"  "}
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
                        {token.amount} {"  "}
                      </Text>
                      XPC
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
            <Table mt={3} borderRadius={"xl"} overflow={"hidden"}>
              <Tbody backgroundColor={"white"} color={"black"}>
                <Tr>
                  <Td color={"#6779F3"} fontWeight={"bold"}>
                    After Fee:
                  </Td>
                  <Td>
                    <Text as={"span"} textColor={"#A90AFF"} fontWeight={"bold"}>
                      {data.afterFee} {"  "}
                    </Text>
                    XPC
                  </Td>
                </Tr>
                <Tr>
                  <Td color={"#6779F3"} fontWeight={"bold"}>
                    Total Spend:
                  </Td>
                  <Td>
                    <Text as={"span"} textColor={"#A90AFF"} fontWeight={"bold"}>
                      {data.totalSpend} {"  "}
                    </Text>
                    USDT
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </Box>
        </Stack>
      ) : null}
      <VStack w={"full"}>
        <Button
          w={"full"}
          variant={"primary"}
          isLoading={isLoadingBuy}
          onClick={handleBuy}
        >
          Buy
        </Button>
        <Button
          w={"full"}
          variant={"ghost"}
          color={"#A4A4BE"}
          onClick={() => setState("EXCHANGE_LIST")}
        >
          Back
        </Button>
      </VStack>
    </>
  );
};
