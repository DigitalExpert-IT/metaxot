import { Box, Heading, Stack, Text, VStack } from "@chakra-ui/react";
import { CardFaq } from "components/Card";
import { FAQS } from "constant/pages/home";
import { useTranslation } from "react-i18next";

export const SectionFaqs = () => {
  const { t } = useTranslation();
  return (
    <VStack my={"20"} spacing={{ lg: "6", md: "4", base: "2" }}>
      <Text
        textAlign={"center"}
        fontSize={{ lg: "2xl", base: "xl" }}
        color="yellowMetaxot.500"
      >
        {t("pages.home.faqs.title")}
      </Text>
      <Heading textAlign={"center"} fontSize={{ lg: "5xl", base: "3xl" }}>
        {t("pages.home.faqs.subtitle")}
      </Heading>
      <Box w={"full"} pt={"10"} maxW={"6xl"} mx={"auto"} minH={"lg"}>
        <Stack spacing={{ lg: "6", md: "4", base: "2" }}>
          {FAQS.map((data, idx) => (
            <CardFaq
              key={idx}
              questions={data.questions}
              answers={data.answers}
            />
          ))}
        </Stack>
      </Box>
    </VStack>
  );
};
