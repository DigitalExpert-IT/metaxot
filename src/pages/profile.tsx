/* eslint-disable jsx-a11y/alt-text */
import {
  AspectRatio,
  Box,
  Heading,
  Image,
  Stack,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { LayoutMain } from "components";
import {
  useAddress,
  useContract,
  useOwnedNFTs,
  useBalance,
  useNFTBalance,
} from "@thirdweb-dev/react";
import { MNFT, XPC_CONTRACT } from "constant/address";
import { ZERO_ADDRESS } from "constant/dummyResAPI";

const chain = process.env.NEXT_PUBLIC_CHAIN_ID;

const Profile = () => {
  const address = useAddress();
  const { contract } = useContract(MNFT[chain as "0x29a"]);
  const { data: NFTs, isLoading: isLoadingNFTs } = useOwnedNFTs(
    contract,
    address
  );

  const { data: dataWallet, isLoading: isLoadingWallet } = useBalance(
    XPC_CONTRACT[chain as "0x29a"]
  );
  const { data: coin, isLoading: isLoadingCoin } = useBalance();
  const {
    isLoading,
    data: NFTBalance,
    error,
  } = useNFTBalance(contract, address, 1);
  return (
    <LayoutMain title="Profile">
      <Box maxW={"container.lg"}>
        <Heading as="h1">Profile</Heading>
        <Box
          my="1"
          p="1"
          rounded="md"
          border="1px"
          borderColor="whiteAlpha.400"
        >
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
            {Object.values(coin ?? {})
              ? Object.values(coin ?? {}).map((e, i) => (
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
      <Box maxW={"container.lg"}>
        <Box my="10">
          {!address && <Text>Need Connect Wallet . . .</Text>}
          {isLoadingNFTs ? (
            <Text>Loading NFTs . . .</Text>
          ) : (
            <Heading py="2" as="h2" fontSize="lg">
              NFTs
            </Heading>
          )}
          <Stack>
            <Wrap>
              {!Number(NFTBalance) && (
                <Text color="whiteAlpha.400">
                  You Don&apos;t Have NFT . . .{" "}
                </Text>
              )}
              {NFTs?.map((e, i) => (
                <WrapItem
                  key={i}
                  w={{ xl: "20%", base: "40%" }}
                  rounded="md"
                  overflow="hidden"
                >
                  <Stack bg="whiteAlpha.100">
                    <Image
                      src="https://ik.imagekit.io/msxxxaegj/metashot/lot_medium.png?updatedAt=1699335228063"
                      alt={String(e.metadata.name)}
                      objectFit="cover"
                    />

                    <Stack direction="row" p="2">
                      <Box>
                        {Object.keys(e.metadata).map((j, k) => (
                          <Text key={k} fontSize="xs">
                            {j}
                          </Text>
                        ))}
                      </Box>
                      <Box>
                        {Object.values(e.metadata).map((j, k) => {
                          return (
                            <Text key={k} fontSize="xs">
                              {j}
                            </Text>
                          );
                        })}
                      </Box>
                    </Stack>
                  </Stack>
                </WrapItem>
              ))}
            </Wrap>
          </Stack>
        </Box>
      </Box>
    </LayoutMain>
  );
};
export default Profile;
