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

  const { data: NFTBalance } = useNFTBalance(contract, address, 1);

  // Cause the uri needing auth, we need (temporary until found the propper way)
  useEffect(() => {
    const getMetadata = async () => {
      await Promise.all(
        NFTsData?.map(
          async nft => await axRef.get(nft.metadata.uri).then(res => res.data)
        ) ?? []
      ).then(results => {
        setMetadatas(results);
      });
    };

    getMetadata();
  }, [NFTsData]);

  const nftWithMetadata: INFTData[] | undefined = useMemo(() => {
    if (!metadatas) return [] as INFTData[];

    return NFTsData?.map((e: any) => {
      const detail = metadatas.find(j => j.result.id === e["0"]);
      return { ...e, ...detail };
    });
  }, [metadatas]);

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
