import { Box, Button, Heading, Stack, Text, VStack } from "@chakra-ui/react";
import { BackgroundExploreLand } from "components/Background";
import React from "react";
import { useTranslation } from "react-i18next";

export const SectionExplore = () => {
  const { t } = useTranslation();
  return (
    <Box
      mx={"auto"}
      my={"20"}
      rounded={"3xl"}
      position={"relative"}
      maxW={{ base: "sm", lg: "full" }}
    >
      <BackgroundExploreLand />
      <VStack
        position={"absolute"}
        top={{ base: "30%", lg: 0 }}
        bottom={0}
        right={0}
        px={"4"}
        left={{ base: 0, lg: "50%" }}
        justifyContent={"center"}
        w={{ base: "full", lg: "50%" }}
      >
        <Box maxW={{ base: "full", lg: "md" }} pr={{ lg: "4" }}>
          <Stack spacing={{ xl: "4", lg: "0", base: "2" }} color={"black"}>
            <Text
              fontSize={{ lg: "2xl", base: "xl" }}
              color="yellowMetaxot.500"
            >
              {t("pages.home.explore.title")}
            </Text>
            <Heading fontSize={{ lg: "4xl", base: "2xl" }} fontWeight={"black"}>
              {t("pages.home.explore.subtitle")}
            </Heading>
            <Text fontSize="sm" textAlign={"justify"}>
              {t("pages.home.explore.description")}
            </Text>
          </Stack>
          <Box mt={"4"}>
            <Button colorScheme={"metaxot"}>{t("common.buyLand")}</Button>
          </Box>
        </Box>
      </VStack>
    </Box>
  );
};
