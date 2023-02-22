import { Box, Heading, Stack, StackProps, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

export const RoadmapHeader: React.FC<StackProps> = props => {
  const { t } = useTranslation();
  return (
    <Stack textAlign="center" alignItems="center" {...props}>
      <Heading as="h1">{t("pages.roadmap.title")}</Heading>
      <Box w={{ md: 800, base: "100%" }}>
        <Text>{t("pages.roadmap.content")}</Text>
      </Box>
    </Stack>
  );
};
