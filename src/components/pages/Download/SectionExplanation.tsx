import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { DOWNLOAD_EXPLANATION } from "constant/pages/download";
import { t } from "i18next";

export const SectionExplanation = () => {
  return (
    <Flex flexWrap={"wrap"} justify={"space-around"} gap={4} my={"20"}>
      {DOWNLOAD_EXPLANATION.map((row, idx) => (
        <Box key={idx} maxW={"xs"}>
          <Heading
            mb={"12"}
            size={"lg"}
            fontWeight={"black"}
            color={"yellowMetaxot.500"}
          >
            {t(row.title)}
          </Heading>
          <Text>{t(row.description)}</Text>
        </Box>
      ))}
    </Flex>
  );
};
