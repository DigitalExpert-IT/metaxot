import {
  Box,
  Button,
  Card,
  Heading,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
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
      <Button colorScheme={"yellowMetaxot"} boxShadow={"yellow"}>
        {t("common.download")} Metaxot
      </Button>
    </Stack>
  );
};
