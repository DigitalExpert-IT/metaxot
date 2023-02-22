import { Heading, Stack } from "@chakra-ui/react";
import { RoadmapDate } from "./RoadmapDate";
import { RoadmapList, RoadmapListItem } from "./RoadmapUtils";
import { useTranslation } from "react-i18next";
export const RoadmapTimeLine = () => {
  const { t } = useTranslation();
  return (
    <Stack justifyContent="center" alignItems="center" my="20" spacing={5}>
      <Heading fontSize="2xl" as="h2">
        {t("pages.roadmap.preRelease.title")}
      </Heading>
      <RoadmapDate />
      <RoadmapList>
        <RoadmapListItem
          mode="left"
          title={t("pages.roadmap.preRelease.roadmap.q1.title")!}
          content={t("pages.roadmap.preRelease.roadmap.q1.content")!}
          quartal={t("pages.roadmap.preRelease.roadmap.q1.quartal")!}
        />
        <RoadmapListItem
          mode="right"
          top="5%"
          title={t("pages.roadmap.preRelease.roadmap.q2.title")!}
          content={t("pages.roadmap.preRelease.roadmap.q2.content")!}
          quartal={t("pages.roadmap.preRelease.roadmap.q2.quartal")!}
        />
        <RoadmapListItem
          mode="left"
          top="10%"
          title={t("pages.roadmap.preRelease.roadmap.q3.title")!}
          content={t("pages.roadmap.preRelease.roadmap.q3.content")!}
          quartal={t("pages.roadmap.preRelease.roadmap.q3.quartal")!}
        />
        <RoadmapListItem
          mode="right"
          top="20%"
          title={t("pages.roadmap.preRelease.roadmap.q4.title")!}
          content={t("pages.roadmap.preRelease.roadmap.q4.content")!}
          quartal={t("pages.roadmap.preRelease.roadmap.q4.quartal")!}
        />
      </RoadmapList>
    </Stack>
  );
};
