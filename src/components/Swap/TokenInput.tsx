import { ChevronDownIcon } from "@chakra-ui/icons";
import { Box, Input, Button } from "@chakra-ui/react";
import { TokenListType } from "./TokenList";

interface ITokenInput {
  selectedToken: TokenListType;
  onChangeAmount: React.ChangeEventHandler<HTMLInputElement>;
  onClickToken: (origin: string) => void;
  origin: string;
}

const TokenInput: React.FC<ITokenInput> = ({
  selectedToken,
  onChangeAmount,
  onClickToken,
  origin,
}) => {
  return (
    <Box
      display={"flex"}
      flexDir={"row"}
      borderRadius={15}
      background={"#424343"}
      my={2}
    >
      <Button
        minH={50}
        display={"flex"}
        flexDirection={"row"}
        alignItems={"center"}
        background={"#6779F3"}
        _hover={{ background: "#6779F3" }}
        gap={5}
        onClick={() => onClickToken(origin)}
      >
        {selectedToken.name}
        <ChevronDownIcon />
      </Button>
      <Input
        minH={50}
        background={"transparent"}
        _focus={{ background: "transparent" }}
        _hover={{ background: "transparent" }}
        type="number"
        placeholder="Enter amount here"
        onChange={onChangeAmount}
      />
    </Box>
  );
};

export default TokenInput;
