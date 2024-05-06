import { Box, Button, VStack } from "@chakra-ui/react";
import { useContext } from "react";
import { TradeExchangeContext } from ".";

export const SellXpcForm = () => {
  const { setState } = useContext(TradeExchangeContext);

  return (
    <>
      <Box w={"full"} minH={"300px"}></Box>
      <VStack w={"full"}>
        <Button w={"full"} variant={"primary"} onClick={() => {}}>
          Sell
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
