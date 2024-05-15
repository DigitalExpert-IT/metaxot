import { createContext, Dispatch, SetStateAction, useState } from "react";
import { Box, Text, VStack, Button } from "@chakra-ui/react";
import { BuyXpcForm } from "./BuyXpcForm";
import { SellXpcForm } from "./SellXpcForm";
import { ExchangeList } from "./ExchangeList";

type TContext = {
  state: string;
  setState: Dispatch<SetStateAction<string>>;
};

export const TradeExchangeContext = createContext<TContext>({
  state: "EXCHANGE_LIST",
  setState: () => {},
});

type TState = {
  title: string;
  component: JSX.Element;
};

interface IStates {
  [key: string]: TState;
}

const states: IStates = {
  EXCHANGE_LIST: {
    title: "Live Rate",
    component: <ExchangeList />,
  },
  BUY_XPC: {
    title: "Buy XPC",
    component: <BuyXpcForm />,
  },
  SELL_XPC: {
    title: "Sell XPC",
    component: <SellXpcForm />,
  },
};

export const TradeXpc = () => {
  const [state, setState] = useState("EXCHANGE_LIST");

  return (
    <VStack mt={6}>
      <TradeExchangeContext.Provider value={{ state, setState }}>
        <Text fontSize={"xl"} fontWeight={"bold"} textAlign={"center"} py={4}>
          {states[`${state}`].title}
        </Text>

        {states[`${state}`].component}
      </TradeExchangeContext.Provider>
    </VStack>
  );
};
