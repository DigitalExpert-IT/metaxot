import { BADGE_CONTENT } from "constant";
import { useTranslation } from "react-i18next";
import { Badge, Heading, Text, Wrap, WrapItem } from "@chakra-ui/react";
import { SectionBody, SectionFooter, SectionMain } from "components/Section";

export const SectionAboutUs = () => {
  const { t } = useTranslation();
  return (
    <SectionMain image="/assets/content/mars.png">
      <SectionBody>
        <Text fontSize={{ lg: "2xl", base: "xl" }} color="yellowMetaxot.500">
          {t("pages.home.aboutUs.section")}
        </Text>
        <Heading fontSize={{ lg: "5xl", base: "3xl" }}>
          {t("pages.home.aboutUs.title")}
        </Heading>
        <Text fontSize="sm">{t("pages.home.aboutUs.subtitle")}</Text>
      </SectionBody>
      <SectionFooter>
        <Wrap>
          {BADGE_CONTENT.map((content, idx) => (
            <WrapItem key={idx}>
              <Badge>{t(`pages.home.aboutUs.badge.${content}`)}</Badge>
            </WrapItem>
          ))}
        </Wrap>
      </SectionFooter>
    </SectionMain>
  );
};
