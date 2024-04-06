import { Box, Image, Button, List, Text } from "@chakra-ui/react";

export type TokenListType = {
  name: string;
  address: string;
  iconUrl?: string;
};

interface ITokenList {
  tokenList: Array<TokenListType>;
  onSelectToken: (token: TokenListType) => void;
}

const TokenList: React.FC<ITokenList> = ({ tokenList, onSelectToken }) => {
  return (
    <Box>
      <Text fontSize={"large"} as={"label"}>
        Token List
      </Text>
      <List display={"flex"} flexDirection={"column"}>
        {tokenList.map(token => (
          <Box
            key={token.name}
            display={"flex"}
            flexDirection={"row"}
            alignItems={"center"}
            my={4}
            gap={4}
          >
            <Image
              src={
                token.iconUrl ?? "https://cryptologos.cc/logos/bnb-bnb-logo.png"
              }
              alt={`${token.name} logo`}
              maxW={8}
            />
            <Button
              backgroundColor={"transparent"}
              _hover={{ backgroundColor: "transparent" }}
              onClick={() => onSelectToken(token)}
              w={"100%"}
              textAlign={"left"}
            >
              {token.name}
            </Button>
          </Box>
        ))}
      </List>
    </Box>
  );
};

export default TokenList;
