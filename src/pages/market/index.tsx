import {
  Stack,
  Text,
  UnorderedList,
  ListItem,
  Wrap,
  WrapItem,
  Image,
  Icon,
} from "@chakra-ui/react";
import { LayoutMain, CircleGalaxy } from "components";
import { CATEGORY } from "constant/pages/category";
import { useListPreMintQuery } from "hooks/market";
import { t } from "i18next";
import { useRouter } from "next/router";
import { useMemo, useState } from "react";
import { prettyBn } from "utils";
import { BsPinMapFill } from "react-icons/bs";
import { useMarketContract } from "hooks/market/useMarketContract";

export const Market = () => {
  const [isActive, setIsActive] = useState<number>(0);
  const { data } = useListPreMintQuery();
  const nomarilizer = useMemo(() => {
    return CATEGORY.map((ctg, i) => {
      if (isActive === i) {
        return { ...ctg, isActive: true };
      }
      return { ...ctg, isActive: false };
    });
  }, [isActive]);
  const route = useRouter();

  console.log(data);
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
      <Stack py="2">
        {data === undefined ? (
          <Text>waiting tresno jalaran soko kulino</Text>
        ) : (
          <Wrap spacing={"5"}>
            {data?.map((e: any, idx: number) => {
              return (
                <WrapItem
                  w={{ md: "23%", base: "43%" }}
                  key={idx}
                  onClick={() => route.push(`/market/${idx}`)}
                  cursor="pointer"
                  _hover={{
                    transform: "scale(1.01) ",
                    transition: "0.1s",
                  }}
                >
                  <Stack bg="whiteAlpha.300" rounded="lg" overflow="hidden">
                    <Image src={e.picture} alt="caracter" />
                    <Stack p="3">
                      <Text fontSize={"xl"}>{e.name}</Text>
                      <Stack direction={"row"} justify="space-between">
                        <Stack>
                          <Text color={"whiteAlpha.700"} fontSize="xs">
                            Price
                          </Text>
                          <Text fontWeight={"800"}>
                            {prettyBn(e.price, 9)} XPC
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
