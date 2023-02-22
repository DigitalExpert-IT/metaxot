import { Box, Heading, Stack } from "@chakra-ui/react";
import { ButtonShadow } from "components/Button";
import { useTranslation } from "react-i18next";

export const SectionHeader = () => {
  const { t } = useTranslation();

  return (
    <Stack align={"center"} spacing={8}>
      <Box py={"16"}>
        <Heading mt={12} size={{ md: "3xl", base: "2xl" }}>
          {t("pages.download.header")}
        </Heading>
      </Box>
      <ButtonShadow>{t("common.download")} Metaxot</ButtonShadow>
    </Stack>
  );
};
