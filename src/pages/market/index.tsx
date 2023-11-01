import {
  Stack,
  Text,
  UnorderedList,
  ListItem,
  Wrap,
  WrapItem,
  Image,
} from "@chakra-ui/react";
import { LayoutMain, CircleGalaxy } from "components";
import { CATEGORY } from "constant/pages/category";
import { t } from "i18next";
import { useRouter } from "next/router";
import { useMemo, useState } from "react";
function Market() {
  const [isActive, setIsActive] = useState<number>(0);

  const nomarilizer = useMemo(() => {
    return CATEGORY.map((ctg, i) => {
      if (isActive === i) {
        return { ...ctg, isActive: true };
      }
      return { ...ctg, isActive: false };
    });
  }, [isActive]);

  const items = useMemo(() => {
    return new Array(6).fill(null).map((_, i) => {
      return i;
    });
  }, []);
  const route = useRouter();

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
        <Wrap spacing={"5"}>
          {items.map(e => {
            return (
              <WrapItem
                w={{ md: "23%", base: "43%" }}
                key={e}
                onClick={() => route.push(`/market/${e}`)}
                cursor="pointer"
                _hover={{
                  transform: "scale(1.01) ",
                  transition: "0.1s",
                }}
              >
                <Stack bg="whiteAlpha.300" rounded="lg" overflow="hidden">
                  <Image
                    src="https://th.bing.com/th/id/OIG.Wz9RM4AS.VbkbTbfHSYO?pid=ImgGn"
                    alt="caracter"
                  />
                  <Stack p="3">
                    <Text>Name</Text>
                    <Text>30 XPC</Text>
                  </Stack>
                </Stack>
              </WrapItem>
            );
          })}
        </Wrap>
      </Stack>
    </LayoutMain>
  );
}

export default Market;
