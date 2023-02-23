import { Box } from "@chakra-ui/react";
import { RoadmapHeader } from "components";
import { LayoutMain, RoadmapTimeLine } from "components";

const Roadmap = () => {
  return (
    <LayoutMain title="Roadmap">
      <Box
        fontSize="9xl"
        as="div"
        textAlign="center"
        w="full"
        left="0"
        top={120}
        fontWeight="bold"
        position="absolute"
        opacity="0.5"
        bgGradient="linear(to-b, whiteAlpha.100, transparent)"
        bgClip="text"
        zIndex="1"
        // wait wait hold on this is not title, it just background
      >
        IMPLEMENTATION
      </Box>
      <RoadmapHeader zIndex="2" position="relative" />
      <RoadmapTimeLine />
    </LayoutMain>
  );
};
export default Roadmap;
