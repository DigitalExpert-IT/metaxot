import { KeyboardEvent, FocusEvent, useContext, useState } from "react";
import { Box, Button, Input, VStack, Text } from "@chakra-ui/react";
import Image from "next/image";
import { TradeExchangeContext } from ".";

export const BuyXpcForm = () => {
  const { setState } = useContext(TradeExchangeContext);
  const [value, setValue] = useState<number>(0);

  const getAvailableToken = () => {};

  const handleBlurCalculation = (e: FocusEvent<HTMLInputElement>) => {
    console.log("blur", value);
  };
  const handleKeyCalculation = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.code == "Enter") {
      console.log("value", value);
    }
  };

  return (
    <>
      <Box w={"full"} minH={"300px"}>
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
              src={"/assets/icon/xpc_token.svg"}
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
            onBlur={handleBlurCalculation}
            onKeyUp={handleKeyCalculation}
          />
        </Box>
      </Box>
      <VStack w={"full"}>
        <Button w={"full"} variant={"primary"} onClick={() => {}}>
          Buy
        </Button>
        <Button
          w={"full"}
          variant={"ghost"}
          onClick={() => setState("EXCHANGE_LIST")}
        >
          Back
        </Button>
      </VStack>
    </>
  );
};
