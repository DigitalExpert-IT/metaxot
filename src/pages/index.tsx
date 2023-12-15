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
} from "@chakra-ui/react";
import { LayoutMain, CircleGalaxy } from "components";
import { CATEGORY } from "constant/pages/category";
import {
  useListPreMintQuery,
  // useListPreMintQueryByCategory,
} from "hooks/market";
import { t } from "i18next";
import { useRouter } from "next/router";
import { useMemo, useState } from "react";
import { fromBn } from "evm-bn";

export const Market = () => {
  const [isActive, setIsActive] = useState<number>(-1);
  const { data } = useListPreMintQuery();
  // const { data: categoryItem } = useListPreMintQueryByCategory(isActive);
  const nomarilizer = useMemo(() => {
    return CATEGORY.map((ctg, i) => {
      if (isActive === i) {
        return { ...ctg, isActive: true };
      }
      return { ...ctg, isActive: false };
    });
  }, [isActive]);
  const route = useRouter();

  const filteredData = useMemo(() => {
    if (isActive === -1) {
      return data.sort((a, b) => {
        if (a.isSold === b.isSold) {
          return 0;
        }
        return a.isSold ? 1 : -1;
      });
    }

    return data
      ?.filter(nft => Number(nft.category ?? 0) === isActive)
      .sort((a, b) => {
        if (a.isSold === b.isSold) {
          return 0;
        }
        return a.isSold ? 1 : -1;
      });
  }, [data, isActive]);

  return (
    <LayoutMain title="Market">
      <Stack position={"relative"} maxW={"xs"} ml={"60%"} zIndex={"hide"}>
        <CircleGalaxy top={0} mt={"-30rem"} />
      </Stack>
      <Stack
        as={UnorderedList}
        direction="row"
        spacing="1rem"
        marginInlineStart={"0"}
        listStyleType="none"
        py="2"
      >
        <ListItem
          background={isActive == -1 ? "whiteAlpha.300" : ""}
          p="2"
          rounded="md"
          cursor={"pointer"}
          onClick={() => setIsActive(-1)}
        >
          {t(`pages.market.category.all`)}
        </ListItem>
        {nomarilizer.map((category, i) => {
          return (
            <ListItem
              background={category?.isActive ? "whiteAlpha.300" : ""}
              p="2"
              rounded="md"
              cursor={"pointer"}
              key={i}
              onClick={() => setIsActive(i)}
            >
              {t(`pages.market.category.${category?.name}`)}
            </ListItem>
          );
        })}
      </Stack>
      <Stack py="2" pb={12}>
        {data === undefined ? (
          <Box height={100} textAlign={"center"}>
            <Text fontWeight={"bold"}>
              waiting ... tresno jalaran soko kulino
            </Text>
          </Box>
        ) : (
          <Wrap spacing={"5"}>
            {filteredData?.map((e: any, idx: number) => {
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
                        src={e.picture}
                        alt="character"
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
    </LayoutMain>
  );
};

export default Market;
