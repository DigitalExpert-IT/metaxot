import {
  Box,
  Button,
  Grid,
  GridItem,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import { WidgetCollection, WidgetCardImage } from "components/Widget";
import { IMAGE_COLLECTION } from "constant/pages/home";
import { useTranslation } from "react-i18next";

export const SectioCollection = () => {
  const { t } = useTranslation();
  return (
    <Grid
      templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(3, 1fr)" }}
      gap={6}
      mx={"auto"}
      my={"20"}
    >
      <GridItem colSpan={1}>
        <Stack
          h={"full"}
          pr={{ lg: "4" }}
          justifyContent={"center"}
          maxW={{ base: "full", lg: "xs" }}
        >
          <Stack spacing={{ xl: "6", lg: "4", base: "2" }}>
            <Text
              fontSize={{ lg: "2xl", base: "xl" }}
              color="yellowMetaxot.500"
            >
              {t("pages.home.collection.title")}
            </Text>
            <Heading fontSize={{ lg: "4xl", base: "2xl" }} fontWeight={"black"}>
              {t("pages.home.collection.subtitle")}
            </Heading>
            <Text fontSize="sm" textAlign={"justify"}>
              {t("pages.home.collection.description")}
            </Text>
          </Stack>
          <Box pt={{ base: "4", lg: "6" }}>
            <Button colorScheme={"metaxot"}>{t("common.browse")}</Button>
          </Box>
        </Stack>
      </GridItem>
      <GridItem colSpan={2} overflowX={"auto"}>
        <WidgetCollection>
          {IMAGE_COLLECTION.map((data, idx) => (
            <WidgetCardImage key={idx} data={data} />
          ))}
        </WidgetCollection>
      </GridItem>
    </Grid>
  );
};
