import { Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { CardPresentation } from "components/Card";
import { SectionBody } from "components/Section";
import { KEY_FEATURES } from "constant/pages/home";
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
          {t("pages.home.keyFetures.title")}
        </Text>
        <Heading textAlign={"center"} fontSize={{ lg: "5xl", base: "3xl" }}>
          {t("pages.home.keyFetures.subtitle")}
        </Heading>
        <SimpleGrid
          columns={{ base: 1, lg: 3 }}
          gap={"1.5"}
          pt={"12"}
          alignSelf={"center"}
          textAlign={"center"}
          maxW={{ base: "sm", lg: "full" }}
        >
          {KEY_FEATURES.map((data, i) => (
            <CardPresentation key={i} subtitle={data.subtitle}>
              <Heading fontSize={"2xl"} fontWeight={"extrabold"}>
                {t(data.title)}
              </Heading>
            </CardPresentation>
          ))}
        </SimpleGrid>
      </SectionBody>
    </Stack>
  );
};
