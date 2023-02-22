import { RoadmapDate } from "./RoadmapDate";
import { useTranslation } from "react-i18next";
import { Heading, Stack } from "@chakra-ui/react";
import { RoadmapList, RoadmapListItem } from "./RoadmapUtils";
import { useTranslation } from "react-i18next";
export const RoadmapTimeLine = () => {
  const { t } = useTranslation();
  return (
    <Stack justifyContent="center" alignItems="center" my="20" spacing={5}>
      <Heading fontSize="2xl" as="h2">
        {t("pages.roadmap.preRelease.title")}
      </Heading>
      <RoadmapDate
        days={t("pages.roadmap.preRelease.roadmap.days")!}
        month={t("pages.roadmap.preRelease.roadmap.month")!}
      />
      <RoadmapList>
        <RoadmapListItem
          mode="left"
          title={t("pages.roadmap.preRelease.roadmap.q1.title")!}
          content={t("pages.roadmap.preRelease.roadmap.q1.content")!}
          quartal={t("pages.roadmap.preRelease.roadmap.q1.quartal")!}
        />
        <RoadmapListItem
<<<<<<< HEAD
          top="5%"
          mode="right"
=======
          mode="right"
          top="5%"
>>>>>>> 0c1135b (update)
          title={t("pages.roadmap.preRelease.roadmap.q2.title")!}
          content={t("pages.roadmap.preRelease.roadmap.q2.content")!}
          quartal={t("pages.roadmap.preRelease.roadmap.q2.quartal")!}
        />
        <RoadmapListItem
<<<<<<< HEAD
          top="10%"
          mode="left"
=======
          mode="left"
          top="10%"
>>>>>>> 0c1135b (update)
          title={t("pages.roadmap.preRelease.roadmap.q3.title")!}
          content={t("pages.roadmap.preRelease.roadmap.q3.content")!}
          quartal={t("pages.roadmap.preRelease.roadmap.q3.quartal")!}
        />
        <RoadmapListItem
<<<<<<< HEAD
          top="20%"
          mode="right"
=======
          mode="right"
          top="20%"
>>>>>>> 0c1135b (update)
          title={t("pages.roadmap.preRelease.roadmap.q4.title")!}
          content={t("pages.roadmap.preRelease.roadmap.q4.content")!}
          quartal={t("pages.roadmap.preRelease.roadmap.q4.quartal")!}
        />
      </RoadmapList>
    </Stack>
  );
};
