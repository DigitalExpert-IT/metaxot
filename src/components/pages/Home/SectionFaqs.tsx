import { Box, Heading, Stack, Text, VStack } from "@chakra-ui/react";
import { CardFaq } from "components/Card";
import { FAQS } from "constant/pages/home";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export const SectionFaqs = () => {
  const { t } = useTranslation();
  const openDefault = [false, false, false, false]
  const [isActive, setIsActive] = useState<boolean[]>(openDefault);
  const hendelClick = (e: number) => {
    if (isActive[e]) {
      setIsActive(openDefault)
      return
    }
    const newState = isActive.map((bol, idx) => {
      if (idx === e) {
        return true
      }
      return false
    })
    setIsActive(newState)
  };

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
      <Box w={"full"} pt={"10"} maxW={"6xl"} mx={"auto"}>
        <Stack spacing={{ lg: "6", md: "4", base: "2" }}>
          {FAQS.map((data, idx) => (
            <CardFaq
              key={idx}
              questions={data.questions}
              answers={data.answers}
              onClick={() => {
                hendelClick(idx);
              }}
              isOpen={isActive[idx]}
            />
          ))}
        </Stack>
      </Box>
    </VStack>
  );
};
