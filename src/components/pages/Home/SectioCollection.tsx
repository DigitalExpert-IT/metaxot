import {
  Box,
  Button,
  Grid,
  GridItem,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import { WidgetCardImage } from "components/Widget";
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
        <Stack h={"full"} justifyContent={"center"} maxW={{ base: "full", lg: "xs" }} pr={{ lg: "4" }}>
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
          <Box mt={{ base: "4", lg: "6" }}>
            <Button colorScheme={"metaxot"}>{t("common.browse")}</Button>
          </Box>
        </Stack>
      </GridItem>
      <GridItem colSpan={2} overflow={"auto"}>
        <Stack direction='row' w={"max-content"} spacing={4} mx={{ base: 0, md: 4 }}>
          {IMAGE_COLLECTION.map((data, idx) => (
            <WidgetCardImage key={idx} data={data} />
          ))}
        </Stack>
      </GridItem>
    </Grid>
  );
};
