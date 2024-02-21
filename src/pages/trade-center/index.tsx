import {
  Stack,
  Text,
  UnorderedList,
  ListItem,
  Wrap,
  WrapItem,
  Image,
  Icon,
  Box,
  HStack,
  Heading,
  InputGroup,
  InputLeftElement,
  Input,
  Select,
  Button,
} from "@chakra-ui/react";
import { LayoutMain, CircleGalaxy } from "components";
import { CATEGORY } from "constant/pages/category";
import {
  useListNftSalesQuery,
  // useListPreMintQueryByCategory,
} from "hooks/market";
import { t } from "i18next";
import { useRouter } from "next/router";
import { useMemo, useState, useEffect } from "react";
import { fromBn } from "evm-bn";
import { generateUriPath } from "utils/uri";
import axRef from "hooks/metaxotGame/axiosRef";
import { SearchIcon } from "@chakra-ui/icons";
import { CgSortAz } from "react-icons/cg";
import { BsArrowsAngleExpand, BsArrowsAngleContract } from "react-icons/bs";

export const Market = () => {
  const [isActive, setIsActive] = useState<number>(-1);
  const { data } = useListNftSalesQuery();
  const [metadatas, setMetadatas] = useState<[] | any>([]);
  const nomarilizer = useMemo(() => {
    return CATEGORY.map((ctg, i) => {
      if (isActive === i) {
        return { ...ctg, isActive: true };
      }
      return { ...ctg, isActive: false };
    });
  }, [isActive]);
  const route = useRouter();

  // Cause the uri needing auth, we need (temporary until found the propper way)
  useEffect(() => {
    const getMetadata = async () => {
      await Promise.all(
        data?.map(
          async (nft: any) =>
            await axRef
              .get(generateUriPath(nft.uuid, +fromBn(nft.category, 1) * 10))
              .then((res) => res.data)
        ) ?? []
      ).then((results) => {
        setMetadatas(results);
      });
    };

    getMetadata();
  }, [data]);

  const filteredData = useMemo(() => {
    if (!metadatas) return [];
    const nftList = data?.map((e: any) => {
      const detail = metadatas.find((j: any) => j.result.id === e.uuid);
      return { ...e, ...detail };
    });

    // add metadata to NFT
    const nftWithMetadata = nftList?.map((e: any) => {
      const detail = metadatas.find((j: any) => {
        return j.result.Id === e.uuid;
      });
      return { ...e, ...detail };
    });

    if (isActive === -1) {
      return nftWithMetadata;
    }

    return nftWithMetadata?.filter(
      (nft) => Number(nft.category ?? 0) === isActive
    );
  }, [data, metadatas, isActive]);

  const filteredDataByCategory = useMemo(() => {
    if (!metadatas || !data) return [];

    const removedUnknownList = data?.filter((nft) => nft["1"] !== "");

    // Add metadata to NFT
    const nftWithMetadata = removedUnknownList?.map((e: any) => {
      const detail = metadatas.find((j: any) => j.result.Id === e.uuid);

      return { ...e, ...detail };
    });

    // Initialize an array to store NFTs for each category
    const categorizedNFTs = new Array(CATEGORY.length).fill([]).map(() => []);

    // Filter and categorize NFTs by category
    nftWithMetadata?.forEach((nft) => {
      const categoryIndex = Number(nft.category ?? 0);
      if (categoryIndex >= 0 && categoryIndex < CATEGORY.length) {
        categorizedNFTs[categoryIndex].push(nft);
      }
    });

    // Sort and slice NFTs in each category
    const filteredData = categorizedNFTs.map((nftArray) =>
      nftArray
        .sort((a, b) => (a.isSold === b.isSold ? 0 : a.isSold ? 1 : -1))
        .slice(0, isActive ? 4 : nftArray.length)
    );

    return filteredData;
  }, [data, metadatas, isActive]);

  return (
    <LayoutMain title="Trade Market">
      <Stack position={"relative"} maxW={"xs"} ml={"60%"} zIndex={"hide"}>
        <CircleGalaxy top={0} mt={"-30rem"} />
      </Stack>
      <HStack my={5} justifyContent={"space-between"}>
        <Heading>Find Your NFT</Heading>
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
      <Stack
        as={UnorderedList}
        direction="column"
        spacing="1rem"
        marginInlineStart={"0"}
        listStyleType="none"
        py="8"
      >
        {CATEGORY.map((item, id) => (
          <>
            <HStack justifyContent={"space-between"} key={id}>
              <HStack>
                <item.icons color={"white"} />
                <Text>{item.name}</Text>
              </HStack>
              <Box>
                <Button
                  leftIcon={
                    isActive === id ? (
                      <BsArrowsAngleContract size={"1.5rem"} />
                    ) : (
                      <BsArrowsAngleExpand size={"1.5rem"} />
                    )
                  }
                  variant={"unstyled"}
                  // onClick={() => setIsExpand(!expand)}
                  onClick={() => setIsActive(isActive === id ? -1 : id)}
                />
              </Box>
            </HStack>
            <Stack py="2" pb={12}>
              {data === undefined ? (
                <Box height={100} textAlign={"center"}>
                  <Text fontWeight={"bold"}>Loading ...</Text>
                </Box>
              ) : filteredDataByCategory[id].length <= 0 ? (
                <Box height={100} mt={8} textAlign={"center"}>
                  <Text fontWeight={"bold"} fontSize={"xl"}>
                    Coming Soon
                  </Text>
                </Box>
              ) : (
                <Wrap spacing={"5"}>
                  {filteredDataByCategory[id]?.map((e: any, idx: number) => {
                    return (
                      <WrapItem
                        w={{ md: "23%", base: "43%" }}
                        key={idx}
                        onClick={() => !e.isSold && route.push(`/market/${e.uuid}`)}
                        cursor={e.isSold ? "not-allowed" : "pointer"}
                        _hover={{
                          transform: "scale(1.01) ",
                          transition: "0.1s",
                        }}
                      >
                        <Stack
                          bg="whiteAlpha.300"
                          rounded="lg"
                          overflow="hidden"
                        >
                          <Box pos={"relative"}>
                            {e.isSold && (
                              <>
                                <Box
                                  pos={"absolute"}
                                  top={0}
                                  bottom={0}
                                  left={0}
                                  right={0}
                                  backgroundColor={"#0000008f"}
                                ></Box>
                                <Box
                                  pos={"absolute"}
                                  width={"fit-content"}
                                  height={"fit-content"}
                                  top={0}
                                  bottom={0}
                                  left={0}
                                  right={0}
                                  p={2}
                                  margin={"auto"}
                                  border={"3px solid red"}
                                  borderRadius={"lg"}
                                  transform={"rotate(315deg);"}
                                >
                                  <Text
                                    fontSize={"3xl"}
                                    fontWeight={"bold"}
                                    color={"red"}
                                  >
                                    Sold Out
                                  </Text>
                                </Box>
                              </>
                            )}
                            <Image
                              src={e.image}
                              alt={e.name}
                              fallbackSrc="https://via.placeholder.com/300"
                            />
                          </Box>
                          <Stack p="3">
                            <Text fontSize={"xl"}>{e.name}</Text>
                            <Stack direction={"row"} justify="space-between">
                              <Stack>
                                <Text color={"whiteAlpha.700"} fontSize="xs">
                                  Price
                                </Text>
                                <Text fontWeight={"800"}>
                                  {fromBn(e.price, 9)} XPC
                                </Text>
                              </Stack>
                            </Stack>
                          </Stack>
                        </Stack>
                      </WrapItem>
                    );
                  })}
                </Wrap>
              )}
            </Stack>
          </>
        ))}
      </Stack>
    </LayoutMain>
  );
};

export default Market;
