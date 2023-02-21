import { Heading, Stack } from "@chakra-ui/react";
import { RoadmapDate } from "./RoadmapDate";
import { RoadmapList, RoadmapListItem } from "./RoadmapUtils";

export const RoadmapTimeLine = () => {
  return (
    <Stack justifyContent="center" alignItems="center" my="20" spacing={5}>
      <Heading fontSize="2xl" as="h2">
        PRE-ALPHA RELEASE
      </Heading>
      <RoadmapDate />
      <RoadmapList variant={"dekstop"}>
        <RoadmapListItem mode="left" />
        <RoadmapListItem mode="right" top="5%" />
        <RoadmapListItem mode="left" top="10%" />
        <RoadmapListItem mode="right" top="20%" />
      </RoadmapList>
    </Stack>
  );
};
