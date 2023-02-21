import { Heading, Stack } from "@chakra-ui/react";
import { RoadmapDate } from "./RoadmapDate";
import { RoadmapList, RoadmapListItem } from "./RoadmapUtils";

export const RoadmapTimeLine = () => {
  return (
    <Stack justifyContent="center" alignItems="center" my="10" spacing={5}>
      <Heading fontSize="2xl" as="h2">
        PRE-ALPHA RELEASE
      </Heading>
      <RoadmapDate />
      <RoadmapList>
        <RoadmapListItem mode="left" />
        <RoadmapListItem mode="right" top="25%" />
        <RoadmapListItem mode="left" top="50%" />
        <RoadmapListItem mode="right" top="75%" />
      </RoadmapList>
    </Stack>
  );
};
