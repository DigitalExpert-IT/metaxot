import { Box, Card, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { CardPresentation } from "components/Card";
import { SectionBody } from "components/Section";
import React from "react";
import { useTranslation } from "react-i18next";

export const SectionKeyFeature = () => {
  const { t } = useTranslation();
  return (
    <Stack my={"20"}>
      <SectionBody>
        <Text
          textAlign={"center"}
          fontSize={{ lg: "2xl", base: "xl" }}
          color="yellowMetaxot.500"
        >
          KEY FEATURES
        </Text>
        <Heading textAlign={"center"} fontSize={{ lg: "5xl", base: "3xl" }}>
          ESSENTIAL OF METAXOT
        </Heading>
        <SimpleGrid
          columns={{ base: 1, lg: 3 }}
          gap={"1.5"}
          pt={"12"}
          alignSelf={"center"}
          textAlign={"center"}
          maxW={{ base: "sm", lg: "full" }}
        >
          <CardPresentation subtitle="pages.home.missionCard.lorem">
            <Heading fontSize={"2xl"} fontWeight={"extrabold"}>
              Leisure Life
            </Heading>
          </CardPresentation>
          <CardPresentation subtitle="pages.home.missionCard.lorem">
            <Heading fontSize={"2xl"} fontWeight={"extrabold"}>
              Recuring Income
            </Heading>
          </CardPresentation>
          <CardPresentation subtitle="pages.home.missionCard.lorem">
            <Heading fontSize={"2xl"} fontWeight={"extrabold"}>
              WEB 3 Support
            </Heading>
          </CardPresentation>
        </SimpleGrid>
      </SectionBody>
    </Stack>
  );
};
