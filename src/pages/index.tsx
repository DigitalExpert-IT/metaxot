import {
  Stack,
  Text,
  UnorderedList,
  ListItem,
  Wrap,
  WrapItem,
  Image,
  Box,
  Heading,
  HStack,
  IconButton,
  Flex,
  Divider,
  Button,
} from "@chakra-ui/react";
import { LayoutMain, CircleGalaxy } from "components";
import { CATEGORY } from "constant/pages/category";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import {
  useListPreMintQuery,
  // useListPreMintQueryByCategory,
} from "hooks/market";
import { t } from "i18next";
import { useRouter } from "next/router";
import { useMemo, useState, useEffect } from "react";
import { fromBn } from "evm-bn";
import axRef from "hooks/metaxotGame/axiosRef";
import { generateUriPath } from "utils/uri";
import { IMAGE_CAROUSEL } from "constant/pages/home";
import { Trans, useTranslation } from "react-i18next";

export const Home = () => {
  const { t } = useTranslation();
  const [isActive, setIsActive] = useState<number>(0);
  const [metadatas, setMetadatas] = useState<[] | any>([]);
  const [activeCarousel, setIsActiveCarousel] = useState<number>(1);
  const route = useRouter();
  const { data } = useListPreMintQuery();

  // Cause the uri needing auth, we need (temporary until found the propper way)
  useEffect(() => {
    const getMetadata = async () => {
      await Promise.all(
        data?.map(async (nft: any) => {
          await axRef
            .get(generateUriPath(nft.uuid, +fromBn(nft.category, 1) * 10))
            .then((res) => setMetadatas((prev: any) => [...prev, res.data]));
        }) ?? []
      );
    };

    getMetadata();
  }, [data]);

  const nomarilizer = useMemo(() => {
    return CATEGORY.map((ctg, i) => {
      if (isActive === i) {
        return { ...ctg, isActive: true };
      }
      return { ...ctg, isActive: false };
    });
  }, [isActive]);

  const filteredData = useMemo(() => {
    if (!metadatas || !data) return [];

    const removedUnknownList = data?.filter((nft) => nft["1"] !== "");

    // add metadata to NFT
    const nftWithMetadata = removedUnknownList?.map((e: any) => {
      const detail = metadatas.find((j: any) => j.result.Id === e.uuid);

      return { ...e, ...detail };
    });

    return nftWithMetadata
      ?.filter((nft) => Number(nft.category ?? 0) === isActive)
      ?.sort((a, b) => {
        if (a.isSold === b.isSold) {
          return 0;
        }
        return a.isSold ? 1 : -1;
      })
      .slice(0, 8);
  }, [data, metadatas, isActive]);

  //this function is just option while the image navigation not clickable
  const handlePrev = () => {
    setIsActiveCarousel((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : IMAGE_CAROUSEL.length - 1
    );
  };

  const handleNext = () => {
    setIsActiveCarousel((prevIndex) =>
      prevIndex < IMAGE_CAROUSEL.length - 1 ? prevIndex + 1 : 0
    );
  };

  return (
    <LayoutMain title="Market">
      <Stack gap={10}>
        <Stack position={"relative"} maxW={"xs"} ml={"60%"} zIndex={"hide"}>
          <CircleGalaxy top={0} mt={"-30rem"} />
        </Stack>
        <Stack gap={10}>
          <Heading>{"What's New"}</Heading>
          <Flex
            align="center"
            justify="center"
            position="relative"
            py={"12rem"}
          >
            <IconButton
              icon={<ChevronLeftIcon />}
              aria-label="Previous"
              onClick={handlePrev}
              position="absolute"
              left="10px"
              zIndex={2}
            />
            <IconButton
              icon={<ChevronRightIcon />}
              aria-label="Next"
              onClick={handleNext}
              position="absolute"
              right="10px"
              zIndex={2}
            />
            {IMAGE_CAROUSEL.map((item, idx) => {
              const offset = idx - activeCarousel;
              const opacity =
                Math.abs(offset) > 1 ? 0 : 1 - Math.abs(offset) * 0.5;
              const transform = `translateX(${offset * 100}%)`;
              return (
                <Box
                  key={idx}
                  position="absolute"
                  left="50%"
                  transform={`translateX(-50%) ${transform}`}
                  opacity={opacity}
                  transition="transform 0.5s, opacity 0.5s"
                  zIndex={idx === activeCarousel ? 1 : 0}
                  minW={idx === activeCarousel ? "60%" : "5%"}
                >
                  <Image src={item.src} alt={item.alt} />
                  <Button
                    zIndex={2}
                    pos={"absolute"}
                    bgGradient={"linear(to-tr, #706AF5, #A90AFF)'"}
                    ml={"80%"}
                    mt={"-10%"}
                    borderRadius={"30px"}
                  >
                    More
                  </Button>
                </Box>
              );
            })}
          </Flex>
          <HStack align="center" justify="center">
            <Divider
              borderColor={activeCarousel === 0 ? "#6779F3" : "gray.300"}
              my={2}
              w={"5%"}
              borderWidth={"1.5px"}
              onClick={() => setIsActiveCarousel(0)}
            />
            <Divider
              borderColor={activeCarousel === 1 ? "#6779F3" : "gray.300"}
              w={"5%"}
              borderWidth={"1.5px"}
              onClick={() => setIsActiveCarousel(1)}
            />
            <Divider
              borderColor={activeCarousel === 2 ? "#6779F3" : "gray.300"}
              w={"5%"}
              borderWidth={"1.5px"}
              onClick={() => setIsActiveCarousel(2)}
            />
          </HStack>
        </Stack>
        <Stack gap={5}>
          <Heading>GET 50% OFF</Heading>
          <Text textAlign={"justify"}>{t("common.dummyContent")}</Text>
        </Stack>
        <Stack>
          <Heading>Trending</Heading>
          <Box height={100} mt={8} textAlign={"center"} >
            <Text fontWeight={"bold"} fontSize={"xl"}>
              Trending NFT is Coming Soon
            </Text>
          </Box>
        </Stack>
        <Stack
          as={UnorderedList}
          direction="row"
          spacing="1rem"
          marginInlineStart={"0"}
          listStyleType="none"
          py="2"
        >
          {nomarilizer.map((category, i) => {
            return (
              <ListItem
                bgGradient={
                  category?.isActive ? "linear(to-tr, #706AF5, #A90AFF)'" : ""
                }
                p="2"
                px="8"
                rounded="30px"
                cursor={"pointer"}
                key={i}
                onClick={() => setIsActive(i)}
              >
                {CATEGORY[i].name}
              </ListItem>
            );
          })}
        </Stack>
        <Stack py="2" pb={12}>
          {data === undefined ? (
            <Box height={100} textAlign={"center"}>
              <Text fontWeight={"bold"}>Loading ...</Text>
            </Box>
          ) : filteredData.length <= 0 ? (
            <Box height={100} mt={8} textAlign={"center"}>
              <Text fontWeight={"bold"} fontSize={"xl"}>
                No NFT
              </Text>
            </Box>
          ) : (
            <Wrap spacing={"5"}>
              {filteredData?.map((e: any, idx: number) => {
                return (
                  <WrapItem
                    w={{ md: "23%", base: "43%" }}
                    key={idx}
                    onClick={() =>
                      !e.isSold &&
                      route.push(`/market/${e.uuid}?category=${e.category}`)
                    }
                    cursor={e.isSold ? "not-allowed" : "pointer"}
                    _hover={{
                      transform: "scale(1.01) ",
                      transition: "0.1s",
                    }}
                  >
                    <Stack bg="whiteAlpha.300" rounded="lg" overflow="hidden">
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
      </Stack>
    </LayoutMain>
  );
};

export default Home;
