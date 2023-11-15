import {
  Box,
  Button,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useAddress, useBalance, useWallet } from "@thirdweb-dev/react";
import { XPC_CONTRACT } from "constant/address";

const chain = process.env.NEXT_PUBLIC_CHAIN_ID;

export const Balance = () => {
  const address = useAddress();
  const { data: dataWallet, isLoading: isLoadingWallet } = useBalance(
    XPC_CONTRACT[chain as "0x29a"]
  );
  const { data: coin, isLoading: isLoadingCoin } = useBalance();
  const wallet = useWallet();

  if (!wallet) {
    return <Text>Please connect your wallet</Text>;
  }

  return (
    <Box maxW={"container.lg"}>
      <Heading as="h1">Profile</Heading>
      <Box my="1" p="1" rounded="md" border="1px" borderColor="whiteAlpha.400">
        <Text noOfLines={1}>{address}</Text>
      </Box>

      <Heading as="h2" mt="4">
        COIN
      </Heading>
      <Stack direction="row">
        <Box>
          {Object.keys(coin ?? {}).map((e, i) => (
            <Box
              my="1"
              p="1"
              rounded="md"
              key={i}
              border="1px"
              borderColor="whiteAlpha.400"
            >
              <Text>{e}</Text>
            </Box>
          ))}
        </Box>
        <Box flex={1}>
          {Object.values(coin ?? {}).map((e, i) => (
            <Box
              my="1"
              p="1"
              rounded="md"
              key={i}
              border="1px"
              borderColor="whiteAlpha.400"
            >
              <Text noOfLines={1}>{e.toString()}</Text>
            </Box>
          ))}
        </Box>
      </Stack>

      <Heading as="h2" mt="4">
        ERC20
      </Heading>
      <Stack direction="row">
        <Box>
          {Object.keys(dataWallet ?? {}).map((e, i) => (
            <Box
              my="1"
              p="1"
              rounded="md"
              key={i}
              border="1px"
              borderColor="whiteAlpha.400"
            >
              <Text>{e}</Text>
            </Box>
          ))}
        </Box>
        <Box flex={1}>
          {Object.values(dataWallet ?? {})
            ? Object.values(dataWallet ?? {}).map((e, i) => (
                <Box
                  my="1"
                  p="1"
                  rounded="md"
                  key={i}
                  border="1px"
                  borderColor="whiteAlpha.400"
                >
                  <Text noOfLines={1}>{e.toString()}</Text>
                </Box>
              ))
            : null}
        </Box>
      </Stack>
    </Box>
  );
};
