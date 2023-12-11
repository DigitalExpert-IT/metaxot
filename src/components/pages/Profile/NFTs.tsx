import { useMemo } from "react";
import {
  Box,
  Heading,
  Image,
  Stack,
  Text,
  Wrap,
  WrapItem,
  Skeleton,
  Button,
} from "@chakra-ui/react";
import {
  useAddress,
  useContract,
  useNFTBalance,
  useOwnedNFTs,
} from "@thirdweb-dev/react";
import { MNFT } from "constant/address";
import { DUMMY_JSON } from "constant/dummyResAPI";
import { t } from "i18next";
import NiceModal from "@ebay/nice-modal-react";
import SellModal from "./SellModal";

const chain = process.env.NEXT_PUBLIC_CHAIN_ID;

export const NFTs = () => {
  const address = useAddress();
  const { contract } = useContract(MNFT[chain as "0x29a"]);
  const { data: NFTsData, isLoading: isLoadingNFTs } = useOwnedNFTs(
    contract,
    address
  );

  const { data: NFTBalance } = useNFTBalance(contract, address, 1);

  const nftWithMetadata = useMemo(() => {
    return NFTsData?.map((e: any) => {
      const detail = DUMMY_JSON.find(j => j.uuid === e["0"]);
      return { ...e, ...detail };
    });
  }, [NFTsData]);

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
    <Box>
      <Box my="10">
        <Heading py="2" as="h2" fontSize="lg">
          NFTs
        </Heading>
        <Stack>
          <Wrap spacing={8}>
            {!Number(NFTBalance) && (
              <Text color="whiteAlpha.400">You Don&apos;t Have NFT . . . </Text>
            )}
            {nftWithMetadata?.map((e, i) => (
              <WrapItem key={i} rounded="md" overflow="hidden">
                <Stack bg="whiteAlpha.100" w={{ md: "16rem" }}>
                  {/* <Image
                    src={e.metadata.image ?? ""}
                    alt={String(e.metadata.name)}
                    objectFit="cover"
                  /> */}

                  <Image
                    src={e.picture}
                    alt="character"
                    fallbackSrc="https://via.placeholder.com/300"
                  />

                  <Stack direction={{ md: "row", base: "column" }} p="2">
                    <Box>
                      {Object.keys(e.metadata).map((j, k) => (
                        <Text key={k} fontSize="xs" noOfLines={1}>
                          {j}
                        </Text>
                      ))}
                    </Box>
                    <Box>
                      {Object.values(e.metadata)
                        ? Object.values(e.metadata ?? [])?.map(
                            (j: any | string, k) => {
                              return (
                                <Text key={k} fontSize="xs" noOfLines={1}>
                                  {j ? j.toString() : "null"}
                                </Text>
                              );
                            }
                          )
                        : null}
                    </Box>
                  </Stack>
                  <Box p={2}>
                    <Button
                      w={"full"}
                      colorScheme="brand"
                      onClick={() => NiceModal.show(SellModal, e.metadata)}
                    >
                      {t("pages.profile.sellNft")}
                    </Button>
                  </Box>
                </Stack>
              </WrapItem>
            ))}
          </Wrap>
        </Stack>
      </Box>
    </Box>
  );
};
