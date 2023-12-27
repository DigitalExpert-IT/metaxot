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
import { t } from "i18next";
import NiceModal from "@ebay/nice-modal-react";
import SellModal from "./SellModal";
import axRef from "hooks/metaxotGame/axiosRef";
import { useListNftSalesQuery } from "hooks/market";

const chain = process.env.NEXT_PUBLIC_CHAIN_ID;

export interface INFTData {
  attributes: string[];
  code: number;
  description: string;
  external_url: string;
  image: string;
  metadata: { id: string; uri: string; code: number; result: {} };
  name: string;
  owner: string;
  result: {
    InteriorData: string;
    Id: string;
    Rotation: { x: number; y: number; z: number };
    FloorData: string;
    Position: { x: number; y: number; z: number };
  };
  status: number;
  supply: string;
  type: string;
}

export const NFTs = () => {
  const address = useAddress();
  const { contract } = useContract(MNFT[chain as "0x29a"]);
  const [metadatas, setMetadatas] = useState<any>(null);
  const { data: NFTsData, isLoading: isLoadingNFTs } = useOwnedNFTs(
    contract,
    address
  );
  const { data: ListNftSales } = useListNftSalesQuery();

  const { data: NFTBalance } = useNFTBalance(contract, address, 1);

  // Cause the uri needing auth, we need (temporary until found the propper way)
  useEffect(() => {
    const getMetadata = async () => {
      await Promise.all(
        NFTsData?.map(
          async (nft: any) =>
            await axRef.get(nft.metadata.uri).then(res => res.data)
        ) ?? []
      ).then(results => {
        setMetadatas(results);
      });
    };

    getMetadata();
  }, [NFTsData]);

  const nftOnListSales = useMemo(() => {
    if (!ListNftSales) return [];

    return ListNftSales.reduce((acc, nft) => {
      if (nft?.owner?.toLowerCase() === address.toLowerCase()) {
        return [...acc, { ...nft, isOnMarket: true }];
      }
      return acc;
    }, []);
  }, [ListNftSales]);

  const nftWithMetadata: INFTData[] | undefined = useMemo(() => {
    if (!metadatas || !NFTsData) return [] as INFTData[];

    const allOwnedNft = NFTsData?.concat(nftOnListSales);

    return allOwnedNft?.map((e: any) => {
      const detail = metadatas.find((j: any) => j.result.id === e["0"]);
      return { ...e, ...detail };
    });
  }, [NFTsData, nftOnListSales, metadatas]);

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
                <Box pos="relative" bg="whiteAlpha.100" w={{ md: "16rem" }}>
                  {e.isOnMarket && (
                    <Box
                      pos={"absolute"}
                      width={"fit-content"}
                      height={"fit-content"}
                      top={6}
                      left={-10}
                      px={8}
                      py={0}
                      border={"3px solid red"}
                      borderRadius={"lg"}
                      background={"red"}
                      transform={"rotate(315deg);"}
                    >
                      <Text
                        fontSize={"sm"}
                        fontWeight={"bold"}
                        color={"white"}
                        textTransform={"uppercase"}
                      >
                        On Market
                      </Text>
                    </Box>
                  )}
                  <Image
                    src={e.image}
                    alt={e.name}
                    fallbackSrc="https://via.placeholder.com/300"
                  />

                  <Box p={2}>
                    <Text fontSize="md" fontWeight={"bold"} noOfLines={1}>
                      {e.name}
                    </Text>
                  </Box>
                  <Box p={2}>
                    <Button
                      w={"full"}
                      colorScheme="brand"
                      onClick={() => NiceModal.show(SellModal, e)}
                    >
                      {e.isOnMarket
                        ? t("pages.profile.cancelSell")
                        : t("pages.profile.sellNft")}
                    </Button>
                  </Box>
                </Box>
              </WrapItem>
            ))}
          </Wrap>
        </Stack>
      </Box>
    </Box>
  );
};
