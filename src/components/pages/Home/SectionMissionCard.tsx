import { Card, Heading, SimpleGrid } from "@chakra-ui/react";
import { CardPresentation } from "components/Card";
import {
  CARD_MISSION_PRESENTATION,
  CARD_MISSION_PROMOTION,
} from "constant/pages/home";
import React from "react";
import { useTranslation } from "react-i18next";

export const SectionMissionCard = () => {
  const { t } = useTranslation();

  return (
    <Card
      mt={"36"}
      mb={"20"}
      mx={"auto"}
      bg={"transparent"}
      rounded={"5xl"}
      overflow={"hidden"}
      maxW={{ base: "md", lg: "full" }}
    >
      <Card
        bg={"whiteAlpha.300"}
        rounded={"none"}
        px={{ base: "4", xs: "8", sm: "16" }}
      >
        <SimpleGrid columns={{ base: 0, lg: 3 }} gap={"5"}>
          {CARD_MISSION_PRESENTATION.map((data, i) => (
            <CardPresentation key={i} subtitle={data.subtitle} textAlign={{ base: "center", lg: "start" }}>
              <Heading mb={"4"} fontSize={"5xl"} fontWeight={"extrabold"}>
                {data.title}
              </Heading>
            </CardPresentation>
          ))}
        </SimpleGrid>
      </Card>
      <SimpleGrid columns={{ base: 0, lg: 3 }} gap={"1"} mt={"1"}>
        {CARD_MISSION_PROMOTION.map((data, i) => (
          <Card
            key={i}
            bg={"whiteAlpha.300"}
            rounded={"none"}
            px={{ base: "4", xs: "8", sm: "16" }}
          >
            <CardPresentation subtitle={data.subtitle}>
              <Heading mb={"4"} fontSize={"2xl"} fontWeight={"extrabold"}>
                {t(data.title)}
              </Heading>
            </CardPresentation>
          </Card>
        ))}
      </SimpleGrid>
    </Card>
  );
};
