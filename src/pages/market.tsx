import {
  Heading,
  HStack,
  Stack,
  Text,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import { LayoutMain, CircleGalaxy } from "components";
import { ButtonShadow } from "components/Button";
import { CardLandSale } from "components/Card";
import { CATEGORY } from "constant/pages/category";
import { t } from "i18next";
import { Trans } from "react-i18next";
function Market() {
  return (
    <LayoutMain title="Market">
      <Stack position={"relative"} maxW={"xs"} ml={"60%"} zIndex={"hide"}>
        <CircleGalaxy top={0} mt={"-30rem"} />
      </Stack>
      <Stack
        as={UnorderedList}
        direction="row"
        spacing="1rem"
        listStyleType="none"
        py="2"
      >
        {CATEGORY.map(category => {
          return (
            <ListItem background="whiteAlpha.300" p="2" rounded="md">
              {t(`pages.market.category.${category.name}`)}
            </ListItem>
          );
        })}
      </Stack>
    </LayoutMain>
  );
}

export default Market;
