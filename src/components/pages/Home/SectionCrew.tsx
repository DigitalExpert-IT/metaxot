import { Box, Heading, Stack, Text } from "@chakra-ui/react"
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
      <Box w={"full"} pt={"10"} maxW={"6xl"} mx={"auto"} minH={"lg"}></Box>
    </Stack>
  )
}
