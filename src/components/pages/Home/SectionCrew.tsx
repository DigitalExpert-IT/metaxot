import { Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { CardCrew } from "components/Card";
import { CREW_LINE_UP } from "constant/pages/home";
import { useTranslation } from "react-i18next";

export const SectionCrew = () => {
  const { t } = useTranslation();
  return (
    <Stack my={"20"} spacing={{ lg: "6", md: "4", base: "2" }}>
      <Text
        textAlign={"center"}
        fontSize={{ lg: "2xl", base: "xl" }}
        color="yellowMetaxot.500"
      >
        {t("pages.home.crew.title")}
      </Text>
      <Heading textAlign={"center"} fontSize={{ lg: "5xl", base: "3xl" }}>
        {t("pages.home.crew.subtitle")}
      </Heading>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={10}
        placeItems={"center"}
        w={"full"}
        pt={"10"}
        px={"2"}
        overflow={"hidden"}
      >
        {CREW_LINE_UP.map((row, idx) => (
          <CardCrew
            key={idx}
            name={row.name}
            title={row.title}
            description={row.description}
          />
        ))}
      </SimpleGrid>
    </Stack>
  );
};
