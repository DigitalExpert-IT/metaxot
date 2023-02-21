import { Box, Heading, Stack, Text } from "@chakra-ui/react";
import { LayoutMain, RoadmapTimeLine } from "components";
import { RoadmapHeader } from "components";

const Roadmap = () => {
  return (
    <LayoutMain>
      <RoadmapHeader />
      <RoadmapTimeLine />
    </LayoutMain>
  );
};
export default Roadmap;
