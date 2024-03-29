import { Box, Select, Input, Image, Text } from "@chakra-ui/react";

type TokenList = {
  name: string;
  iconUrl?: string;
};

interface ITokenInput {
  tokenList: Array<TokenList>;
  onChangeToken: React.ChangeEventHandler<HTMLSelectElement>;
  onChangeAmount: React.ChangeEventHandler<HTMLInputElement>;
}

const TokenInput: React.FC<ITokenInput> = ({
  tokenList,
  onChangeToken,
  onChangeAmount,
}) => {
  return (
    <Box
      display={"flex"}
      flexDir={"row"}
      borderRadius={15}
      background={"#424343"}
      my={2}
    >
      <Select
        minH={50}
        maxW={120}
        borderRadius={15}
        background={"#6779F3"}
        _focus={{ background: "#6779F3" }}
        _hover={{ background: "#6779F3" }}
        onChange={onChangeToken}
      >
        {tokenList.map((token: TokenList) => (
          <option key={token.name} value={token.name}>
            <Image src={token.iconUrl} alt={`${token.name} logo`} w={100} />
            <Text>{token.name}</Text>
          </option>
        ))}
      </Select>
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
