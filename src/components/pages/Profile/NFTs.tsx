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
  Grid,
  GridItem,
  ButtonGroup,
  UnorderedList,
  HStack,
  Select,
  InputGroup,
  InputLeftElement,
  Input,
} from "@chakra-ui/react";
import {
  useAddress,
  useContract,
  useNFTBalance,
  useOwnedNFTs,
} from "@thirdweb-dev/react";
import { CATEGORY } from "constant/pages/category";
import { MNFT } from "constant/address";
import { t } from "i18next";
import NiceModal from "@ebay/nice-modal-react";
import SellModal from "./SellModal";
import Alert from "components/Basic/Alert";
import axRef from "hooks/metaxotGame/axiosRef";
import { useListNftSalesQuery } from "hooks/market";
import { useCancelSellMutation } from "hooks/market/useCancelSellMutation";
import { useAsyncCall } from "hooks/useAsyncCall";
import { fromBn, toBn } from "evm-bn";
import { BigNumber } from "ethers";
import { generateUriPath } from "utils/uri";
import { CgSortAz } from "react-icons/cg";
import { SearchIcon } from "@chakra-ui/icons";

const chain = process.env.NEXT_PUBLIC_CHAIN_ID;

export interface IListNftSales {
  0: BigNumber; // nftId
  1: string; // owner
  2: BigNumber; // price
  3: string; // uuid
  4: BigNumber; // category
  category: BigNumber;
  nftId: BigNumber;
  owner: string;
  price: BigNumber;
  uuid: string;
  name?: string;
  isOnMarket?: boolean;
}

export interface INFTData {
  attributes: string[];
  code: number;
  description: string;
  external_url: string;
  image: string;
  metadata: { id: string; uri: string; code: number; result: {} };
  name: string;
  owner: string;
  category?: never[][];
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
  nftId?: BigNumber;
  isOnMarket?: boolean;
}

export const NFTs = () => {
  const address = useAddress();
  const [isActive, setIsActive] = useState<number>(0);
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
      await Promise.all(
        ListNftSales?.map(
          async (nft: any) =>
            await axRef
              .get(generateUriPath(nft.uuid, +fromBn(nft.category, 1) * 10))
              .then(res => res.data)
        ) ?? []
      ).then(results => {
        setMetadatas((prevResult: any) => [...prevResult, ...results]);
      });
    };

    getMetadata();
  }, [NFTsData, ListNftSales]);

  const nomarilizer = useMemo(() => {
    return CATEGORY.map((ctg, i) => {
      if (isActive === i) {
        return { ...ctg, isActive: true };
      }
      return { ...ctg, isActive: false };
    });
  }, [isActive]);

  const nftOnListSales: INFTData[] = useMemo(() => {
    if (!ListNftSales || !address) return [];

    return ListNftSales.reduce((acc: any, nft: any) => {
      if (nft?.owner?.toLowerCase() === address.toLowerCase()) {
        return [...acc, { ...nft, isOnMarket: true }];
      }
      return acc;
    }, []);
  }, [ListNftSales, address]);

  const nftWithMetadata: INFTData[] = useMemo(() => {
    if (!nftOnListSales || !NFTsData || !metadatas) return [] as INFTData[];

    const allOwnedNft = [...NFTsData, ...nftOnListSales];

    // Sort by URI with multiple categories
    const sortedNft = allOwnedNft.sort((a: any, b: any) => {
      const uriA = a.external_url || "";
      const uriB = b.external_url || "";

      const getCategoryPriorityIndex = (uri: string) => {
        for (let i = 0; i < CATEGORY.length; i++) {
          if (uri.includes(CATEGORY[i].name.toLowerCase())) {
            return i;
          }
        }
        return CATEGORY.length; // If not found, put it at the end
      };

      const categoryIndexA = getCategoryPriorityIndex(uriA);
      const categoryIndexB = getCategoryPriorityIndex(uriB);

      if (categoryIndexA < categoryIndexB) return -1;
      if (categoryIndexA > categoryIndexB) return 1;
      return 0;
    });

    // Add metadata to NFT
    const nftWithMetadata = sortedNft.map((e: any) => {
      const detail = metadatas.find((j: any) => {
        if (e.uuid) {
          // This state if the NFT data comes from the list NFT sales
          return j.result.Id === e.uuid;
        } else {
          // This state if the NFT data comes from owned NFT
          return j.result.Id === (e.metadata?.uri?.split("=")[1] || "");
        }
      });
      return { ...e, ...detail };
    });

    console.log("nft with metadata", nftWithMetadata)

    // Filter by category
    const filteredNftWithMetadata = nftWithMetadata.filter(nft => {
      // Define the category you want to filter by
      const categoryToFilter = `get_${CATEGORY[isActive].name}`;
      const uri = nft.external_uri || "";
      const lowerCaseUri = uri.toLowerCase();
      const lowerCaseCategory = categoryToFilter.toLowerCase();

      return lowerCaseUri.includes(lowerCaseCategory);
    });

    return filteredNftWithMetadata;
  }, [NFTsData, nftOnListSales, metadatas, isActive]);


  const handleCancelSell = async (e: IListNftSales | INFTData) => {
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
                {e?.name}
              </Text>
            </Box>
          </Box>
        ),
      })
    ) {
      if (e.nftId) {
        await cancelSell(+fromBn(e.nftId, 1) * 10);
      }
    }
  };

  if (isLoadingNFTs) {
    return (
      <Box my="10">
        <Heading py="2" as="h1">
          NFT
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
        <Heading py="2" as="h2">
          NFT
        </Heading>
        <Grid
          h="60vh"
          templateAreas={`"header header"
                  "nav main"
                  "nav main"`}
          gridTemplateRows={"50px 1fr 30px"}
          gridTemplateColumns={"200px 1fr"}
          borderRadius={"2xl"}
          border="2px"
          borderColor={"#A4A4BE"}
        >
          <GridItem
            borderTopRadius={"2xl"}
            border="1px"
            borderColor={"#A4A4BE"}
            pl="2"
            bg="#73707D"
            area={"header"}
            textAlign={"center"}
            alignItems={"center"}
          >
            <Text fontSize={"xl"} margin={"auto"} mt={"1vh"}>
              Your NFT Collection
            </Text>
          </GridItem>
          <GridItem
            borderBottomLeftRadius={"2xl"}
            border="1px"
            borderColor={"#A4A4BE"}
            bgColor="rgba(115,112,125, 0.7)"
            area={"nav"}
            py={3}
          >
            {nomarilizer.map((category, i) => {
              return (
                <Button
                  key={i}
                  variant={"ghost"}
                  width={"full"}
                  size={"lg"}
                  justifyContent={"flex-start"}
                  borderRadius={0}
                  isActive={category.isActive ? true : false}
                  leftIcon={
                    <category.icons
                      color={category.isActive ? "#CEA8FF" : "white"}
                    />
                  }
                  onClick={() => setIsActive(i)}
                  color={category.isActive ? "#CEA8FF" : "white"}
                  _active={{ backgroundColor: "#454550" }}
                >
                  {category.name}
                </Button>
              );
            })}
          </GridItem>
          <GridItem
            borderBottomRightRadius={"2xl"}
            border="1px"
            borderColor={"#A4A4BE"}
            bgColor="rgba(115,112,125, 0.5)"
            area={"main"}
            overflow={"auto"}
          >
            <Stack p={5}>
              <HStack mb={5} justifyContent={"flex-end"}>
                <HStack>
                  <Select variant={"unstyled"} icon={<CgSortAz />}>
                    <option value=""></option>
                    {CATEGORY.map((item, id) => (
                      <option value="option1" key={id}>
                        {item.name}
                      </option>
                    ))}
                  </Select>
                  <InputGroup backgroundColor={"white"} borderRadius={10}>
                    <InputLeftElement pointerEvents="none">
                      <SearchIcon color="#A4A4BE" />
                    </InputLeftElement>
                    <Input
                      backgroundColor={"white"}
                      borderRadius={10}
                      placeholder="Seach NFT"
                      _placeholder={{ color: "#A4A4BE" }}
                    />
                  </InputGroup>
                </HStack>
              </HStack>
              <Wrap spacing={8}>
                {!Number(NFTBalance) && nftWithMetadata.length <= 0 && (
                  <Text color="whiteAlpha.400">
                    You Don&apos;t Have NFT . . .{" "}
                  </Text>
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
                        src={e.image || "https://via.placeholder.com/300"}
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
                            bgGradient="linear(to-r, #6679F2, #AD00FF)"
                          >
                            {t("pages.profile.cancelSell")}
                          </Button>
                        ) : (
                          <Button
                            w={"full"}
                            colorScheme="brand"
                            onClick={() => NiceModal.show(SellModal, e)}
                            bgGradient="linear(to-r, #6679F2, #AD00FF)"
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
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
};
