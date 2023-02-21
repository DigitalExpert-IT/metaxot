import { Box, Heading, Stack, Text } from "@chakra-ui/react";
import { RoadmapDate } from "./RoadmapDate";

export const RoadmapTimeLine = () => {
  return (
    <Stack justifyContent="center" alignItems="center" my="10" spacing={5}>
      <Heading>PRE-ALPHA RELEASE</Heading>
      <RoadmapDate />
    </Stack>
  );
};
