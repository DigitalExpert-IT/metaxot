import { RoadmapDate } from "./RoadmapDate";
import { useTranslation } from "react-i18next";
import { Heading, Stack } from "@chakra-ui/react";
import { RoadmapList, RoadmapListItem } from "./RoadmapUtils";
import { ROADMAP_LIST } from "constant/pages/roadmap";

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
        {ROADMAP_LIST.map((roadmapItem, index) => (
          <RoadmapListItem
            mode={roadmapItem.mode}
            title={t(roadmapItem.title)!}
            content={t(roadmapItem.content)!}
            quartal={t(roadmapItem.quartal)!}
            key={index}
          />
        ))}
      </RoadmapList>
    </Stack>
  );
};
