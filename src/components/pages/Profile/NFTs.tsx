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
import Alert from "components/Basic/Alert";
import axRef from "hooks/metaxotGame/axiosRef";
import { useListNftSalesQuery } from "hooks/market";
import { useCancelSellMutation } from "hooks/market/useCancelSellMutation";
import { useAsyncCall } from "hooks/useAsyncCall";
import { fromBn } from "evm-bn";
import { BigNumber } from "ethers";

const chain = process.env.NEXT_PUBLIC_CHAIN_ID;

export interface INFTData {
  0: BigNumber; // nftId
  1: string; // owner
  2: BigNumber; // price
  3: string; // uuid
  4: BigNumber; // category
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

  const { mutateAsync: handleCancelSellContract } = useCancelSellMutation();

  const { exec: cancelSell, isLoading } = useAsyncCall(
    handleCancelSellContract,
    t("succes.successCancelSellNFT")
  );

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
    if (!ListNftSales || !address) return [];

    return ListNftSales.reduce((acc, nft) => {
      if (nft?.owner?.toLowerCase() === address.toLowerCase()) {
        return [...acc, { ...nft, isOnMarket: true }];
      }
      return acc;
    }, []);
  }, [ListNftSales, address]);

  const nftWithMetadata: INFTData[] | undefined = useMemo(() => {
    if (!metadatas || !NFTsData) return [] as INFTData[];

    const allOwnedNft = NFTsData?.concat(nftOnListSales);

    return allOwnedNft?.map((e: any) => {
      const detail = metadatas.find((j: any) => j.result.id === e["0"]);
      return { ...e, ...detail };
    });
  }, [NFTsData, nftOnListSales, metadatas]);

  const handleCancelSell = async (e: INFTData) => {
    if (
      await Alert({
        text: {
          title: "Cancel Selling",
          confirm: t("common.confirm") ?? "",
        },
        body: (
          <Box textAlign={"center"}>
            <Text mb={4}>{t("pages.profile.cancelSellAlert")}</Text>
            <Box
              width={"fit-content"}
              backgroundColor={"#2D2F34"}
              px={8}
              py={2}
              borderRadius={"2xl"}
              margin={"auto"}
            >
              <Text color={"brand.500"} fontWeight={"bold"}>
                {e.name}
              </Text>
            </Box>
          </Box>
        ),
      })
    ) {
      await cancelSell(+fromBn(e[0]));
    }
  };

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
                    {e.isOnMarket ? (
                      <Button
                        w={"full"}
                        colorScheme="brand"
                        onClick={() => handleCancelSell(e)}
                        isLoading={isLoading}
                      >
                        {t("pages.profile.cancelSell")}
                      </Button>
                    ) : (
                      <Button
                        w={"full"}
                        colorScheme="brand"
                        onClick={() => NiceModal.show(SellModal, e)}
                      >
                        {t("pages.profile.sellNft")}
                      </Button>
                    )}
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
