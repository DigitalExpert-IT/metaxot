import { Button, VStack, Input, HStack, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { TradeExchangeContext } from ".";
import { SubmitHandler, useForm } from "react-hook-form";
import { useSellXpcMutation } from "hooks/exchange";

type TSellForm = {
  rate: number;
  amount: number;
};

export const SellXpcForm = () => {
  const { setState } = useContext(TradeExchangeContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TSellForm>({
    defaultValues: { rate: 71, amount: 0 },
  });
  const { sellXpc, isLoading } = useSellXpcMutation();

  const onSubmit: SubmitHandler<TSellForm> = async data => {
    const { rate, amount } = data;
    await sellXpc(rate, amount);
  };

  return (
    <VStack w={"full"}>
      <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
        <Text>Rate:</Text>
        <HStack maxW={"full"} pt={2} pb={4}>
          <HStack maxW={"80px"}>
            <Text minW={"fit-content"}>0.</Text>
            <Input
              type={"number"}
              variant={"ghost"}
              pl={1}
              {...register("rate", {
                maxLength: {
                  value: 2,
                  message: "Rate can accept 2 digit only after comma",
                },
                min: {
                  value: 71,
                  message: "Rate must be greater than 0.7",
                },
              })}
            />
          </HStack>
          <Text>USDT/XPC</Text>
        </HStack>
        <Text color={"red"} textAlign={"center"} pb={4}>
          {errors.rate?.message}
        </Text>
        <Text>Amount:</Text>
        <HStack maxW={"full"} pt={2} pb={4}>
          <HStack>
            <Input
              type={"number"}
              variant={"ghost"}
              pl={1}
              {...register("amount", { valueAsNumber: true })}
            />
          </HStack>
          <Text>XPC</Text>
        </HStack>
        <Text color={"red"} textAlign={"center"} pb={4}>
          {errors.amount?.message}
        </Text>
        <Button
          w={"full"}
          type={"submit"}
          variant={"primary"}
          isLoading={isLoading}
        >
          Sell
        </Button>
        <Button
          w={"full"}
          variant={"ghost"}
          onClick={() => setState("EXCHANGE_LIST")}
        >
          Back
        </Button>
      </form>
    </VStack>
  );
};
