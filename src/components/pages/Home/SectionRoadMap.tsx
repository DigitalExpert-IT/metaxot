import { useTranslation } from "react-i18next";
import { MobileTimeLine, TimeLine } from "components/Section";
import { Heading, Image, Stack, Text } from "@chakra-ui/react";

export const SectionRoadmap = () => {
  const { t } = useTranslation();
  return (
    <Stack pt="8" pb="20">
      <Image
        src="/assets/images/particles.png"
        w="full"
        h="1200"
        left={0}
        position="absolute"
        display={{ base: "none", xl: "block" }}
        zIndex={1}
        objectFit="cover"
        style={{
          WebkitMaskImage:
            "radial-gradient(circle, rgb(0 0 0) 0%, rgb(0 0 0) 0%, rgb(255 255 255 / 0%) 75%)",
        }}
        opacity="0.8"
        alt="roadmap"
      ></Image>
      <Stack textAlign="center" zIndex={3} py="15">
        <Text fontSize={{ lg: "2xl", base: "xl" }} color="yellowMetaxot.500">
          {t("pages.home.achievementAndGoals.title")}
        </Text>
        <Heading fontSize={{ lg: "5xl", base: "3xl" }}>
          {t("pages.home.achievementAndGoals.subtitle")}
        </Heading>
      </Stack>
      <Stack
        zIndex={3}
        alignItems="center"
        py="8"
        display={{ sm: "flex", base: "none" }}
      >
        <TimeLine
          q1={t("pages.home.achievementAndGoals.roadMap.2017")}
          q2={t("pages.home.achievementAndGoals.roadMap.2019")}
          q3={{
            title: t("pages.home.achievementAndGoals.roadMap.2020.title"),
            concept: t("pages.home.achievementAndGoals.roadMap.2020.concept"),
          }}
          q4={t("pages.home.achievementAndGoals.roadMap.2022")}
          q5={t("pages.home.achievementAndGoals.roadMap.2023")}
        />
      </Stack>
      <Stack display={{ sm: "none", base: "flex" }} alignItems="center">
        <MobileTimeLine
          q1={t("pages.home.achievementAndGoals.roadMap.2017")}
          q2={t("pages.home.achievementAndGoals.roadMap.2019")}
          q3={{
            title: t("pages.home.achievementAndGoals.roadMap.2020.title"),
            concept: t("pages.home.achievementAndGoals.roadMap.2020.concept"),
          }}
          q4={t("pages.home.achievementAndGoals.roadMap.2022")}
          q5={t("pages.home.achievementAndGoals.roadMap.2023")}
        />
      </Stack>
    </Stack>
  );
};
