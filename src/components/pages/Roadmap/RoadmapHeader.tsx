import { Box, Heading, Stack, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

export const RoadmapHeader = () => {
  const { t } = useTranslation();
  return (
    <Stack textAlign="center" alignItems="center">
      <Heading as="h1">{t("pages.roadmap.title")}</Heading>
      <Box w={{ md: 800, base: "100%" }}>
        <Text>{t("pages.roadmap.content")}</Text>
      </Box>
    </Stack>
  );
};
