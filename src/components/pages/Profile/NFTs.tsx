import { useEffect, useMemo, useState } from "react";
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
import { useAsyncCall } from "hooks/useAsyncCall";
import { t } from "i18next";
import useMarketApi from "hooks/metaxotGame/useMarketApi";
import { useSellNftMutation } from "hooks/market";

const chain = process.env.NEXT_PUBLIC_CHAIN_ID;

export const NFTs = () => {
  const address = useAddress();
  const [sellNftUid, setSellNftUid] = useState<string | null>(null);
  const { contract } = useContract(MNFT[chain as "0x29a"]);
  const {
    data: NFTsData,
    isLoading: isLoadingNFTs,
    isFetching,
  } = useOwnedNFTs(contract, address);
  const { sellNft: sellNftApi } = useMarketApi();

  const { data: NFTBalance } = useNFTBalance(contract, address, 1);

  const { mutateAsync, status } = useSellNftMutation();

  const nftWithMetadata = useMemo(() => {
    return NFTsData?.map((e: any) => {
      const detail = DUMMY_JSON.find(j => j.uuid === e["0"]);
      return { ...e, ...detail };
    });
  }, [NFTsData]);

  const handleSellContract = async (nft_id: string, uri: string) => {
    await mutateAsync(Number(nft_id) ?? 0).then(() =>
      setSellNftUid(uri.substring(uri.lastIndexOf("=") + 1))
    );
  };

  const { exec: sell, isLoading } = useAsyncCall(
    handleSellContract,
    t("succes.successSellNft")
  );

  // Sell from Metaxot Game API
  useEffect(() => {
    const sellApi = async () => {
      await sellNftApi(sellNftUid ?? "");
      setSellNftUid(null);
    };

    if (status === "success" && sellNftUid) {
      sellApi();
    }
  }, [status, sellNftUid]);

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
            {nftWithMetadata?.map((e, i) => (
              <WrapItem key={i} rounded="md" overflow="hidden">
                <Stack bg="whiteAlpha.100" w={{ md: "30rem" }}>
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
                  <Button
                    isLoading={isLoading}
                    onClick={() => sell(e.metadata?.id, e.metadata?.uri)}
                  >
                    {t("pages.profile.sellNft")}
                  </Button>
                </Stack>
              </WrapItem>
            ))}
          </Wrap>
        </Stack>
      </Box>
    </Box>
  );
};
