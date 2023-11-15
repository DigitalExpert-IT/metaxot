import {
  Box,
  CircularProgress,
  Heading,
  Image,
  Spinner,
  Stack,
  Text,
  Wrap,
  WrapItem,
  Skeleton,
} from "@chakra-ui/react";
import {
  useAddress,
  useContract,
  useNFTBalance,
  useOwnedNFTs,
} from "@thirdweb-dev/react";
import { MNFT } from "constant/address";

const chain = process.env.NEXT_PUBLIC_CHAIN_ID;

export const NFTs = () => {
  const address = useAddress();
  const { contract } = useContract(MNFT[chain as "0x29a"]);
  const { data: NFTsData, isLoading: isLoadingNFTs } = useOwnedNFTs(
    contract,
    address
  );
  const { data: NFTBalance } = useNFTBalance(contract, address, 1);

  if (isLoadingNFTs) {
    return (
      <Box my="10">
        <Heading py="2" as="h2" fontSize="lg">
          NFTs
        </Heading>
        <Skeleton
          w={{ xl: "18%", base: "40%" }}
          h="20rem"
          rounded={"md"}
        ></Skeleton>
      </Box>
    );
  }

  return (
    <Box maxW={"container.lg"}>
      <Box my="10">
        <Heading py="2" as="h2" fontSize="lg">
          NFTs
        </Heading>
        <Stack>
          <Wrap>
            {!Number(NFTBalance) && (
              <Text color="whiteAlpha.400">You Don&apos;t Have NFT . . . </Text>
            )}
            {NFTsData?.map((e, i) => (
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
                      {Object.values(e.metadata).map((j: any | string, k) => {
                        return (
                          <Text key={k} fontSize="xs">
                            {j.toString()}
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
  );
};
