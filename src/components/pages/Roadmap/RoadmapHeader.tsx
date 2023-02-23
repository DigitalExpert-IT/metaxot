import { useTranslation } from "react-i18next";
import { Box, Heading, Stack, StackProps, Text } from "@chakra-ui/react";

export const RoadmapHeader: React.FC<StackProps> = props => {
  const { t } = useTranslation();
  return (
    <Stack textAlign="center" alignItems="center" {...props} pt={75}>
      <Heading as="h1" size={{ md: "3xl", base: "2xl" }}>
        {t("pages.roadmap.title")}
      </Heading>
      <Box w={{ md: 800, base: "100%" }}>
        <Text>{t("pages.roadmap.content")}</Text>
      </Box>
    </Stack>
  );
};
