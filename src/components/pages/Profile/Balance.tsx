import {
  Box,
  HStack,
  Heading,
  Image,
  Stack,
  Text,
  Divider,
} from "@chakra-ui/react";
import { useAddress, useBalance, useWallet } from "@thirdweb-dev/react";
import { XPC_CONTRACT } from "constant/address";
import useAuth from "hooks/metaxotGame/useAuth";

const chain = process.env.NEXT_PUBLIC_CHAIN_ID;

export const Balance = () => {
  const address = useAddress();
  const { userData } = useAuth();
  const { data: dataWallet, isLoading: isLoadingWallet } = useBalance(
    XPC_CONTRACT[chain as "0x29a"]
  );
  const { data: coin, isLoading: isLoadingCoin } = useBalance();
  const wallet = useWallet();

  if (!wallet) {
    return <Text>Please connect your wallet</Text>;
  }

  return (
    <Box maxW={"full"}>
      <Heading as="h1">Profile</Heading>
      <HStack gap={10} mt={5}>
        <Image
          src="https://ik.imagekit.io/msxxxaegj/metashot/dummy-profile.png?updatedAt=1707132259209"
          alt=""
        />
        <Box
          my="1"
          borderRadius={"2xl"}
          border="2px"
          borderColor={"#A4A4BE"}
          bgColor="rgba(115,112,125, 0.5)"
          width={"full"}
          height={"full"}
          flex={1}
          flexDir={"column"}
        >
          <HStack
            alignItems={"center"}
            flex={1}
            justifyContent={"space-between"}
          >
            <HStack>
              <Stack gap={2} flex={1} p={4}>
                <Text noOfLines={1}>Username</Text>
                <Text noOfLines={1}>Rank</Text>
                <Text noOfLines={1}>Wallet Address</Text>
                <Text noOfLines={1}>XPC</Text>
                <Text noOfLines={1}>DTH</Text>
              </Stack>
              <Divider
                borderColor={"white"}
                borderRadius={"2px"}
                height={"200px"}
                orientation="vertical"
              />
            </HStack>
            <Stack gap={2} textAlign={"right"} align={"flex-end"} p={4}>
              <Text noOfLines={1}>{userData?.email}</Text>
              <Text noOfLines={1}>{"Silver"}</Text>
              <Text noOfLines={1}>{address}</Text>
              <Text noOfLines={1}>{coin?.displayValue.toString()}</Text>
              <Text noOfLines={1}>{dataWallet?.displayValue.toString()}</Text>
            </Stack>
          </HStack>
        </Box>
      </HStack>
    </Box>
  );
};
