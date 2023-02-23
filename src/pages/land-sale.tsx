import { Heading, HStack, Stack, Text } from "@chakra-ui/react";
import { LayoutMain, CircleGalaxy } from "components";
import { ButtonShadow } from "components/Button";
import { CardLandSale } from "components/Card";
import { LANDSALE_FEATURES } from "constant/pages/landSale";
import { t } from "i18next";
import { Trans } from "react-i18next";
function LandSale() {
  return (
    <LayoutMain>
      <Stack position={"relative"} maxW={"xs"} ml={"60%"} zIndex={"hide"}>
        <CircleGalaxy top={0} mt={"-30rem"} />
      </Stack>
      <Stack
        textAlign={"center"}
        maxW={"5xl"}
        mx={"auto"}
        spacing={"8"}
        alignItems={"center"}
      >
        <Heading
          size={{ md: "3xl", base: "xl" }}
          lineHeight={{ md: "4.5rem", base: "1" }}
          fontWeight="600"
        >
          <Trans
            components={{ br: <br /> }}
            i18nKey={"pages.landSale.header.title"}
          />
        </Heading>
        <Text maxW={"4xl"} fontSize={"lg"}>
          <Trans
            components={{ br: <br /> }}
            i18nKey={"pages.landSale.header.subtitle"}
          />
        </Text>
      </Stack>
      <HStack gap={6} my={"20"} flexWrap={"wrap"} justify={"space-around"}>
        {LANDSALE_FEATURES.map((row, idx) => (
          <CardLandSale key={idx} data={row} />
        ))}
      </HStack>
      <ButtonShadow my={"28"}>{t("common.checkOnMap")}</ButtonShadow>
    </LayoutMain>
  );
}

export default LandSale;
