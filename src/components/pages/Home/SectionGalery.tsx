import { useTranslation } from "react-i18next";
import { Button, Heading, Text } from "@chakra-ui/react";
import { SectionBody, SectionFooter, SectionMain } from "components/Section";

export const SectionGalery = () => {
  const { t } = useTranslation();
  return (
    <SectionMain image="/assets/content/mars.png" variants="reverse">
      <SectionBody>
        <Text fontSize={{ lg: "2xl", base: "xl" }} color="yellowMetaxot.500">
          {t("pages.home.galery.section")}
        </Text>
        <Heading fontSize={{ lg: "5xl", base: "3xl" }}>
          {t("pages.home.galery.title")}
        </Heading>
        <Text fontSize="sm">{t("pages.home.galery.subtitle")}</Text>
      </SectionBody>
      <SectionFooter>
        <Button colorScheme={"metaxot"}>
          {t("pages.home.galery.viewAll")}
        </Button>
      </SectionFooter>
    </SectionMain>
  );
};
