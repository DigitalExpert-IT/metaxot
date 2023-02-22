import { Box } from "@chakra-ui/react";
import { RoadmapHeader } from "components";
import { LayoutMain, RoadmapTimeLine } from "components";

const Roadmap = () => {
  return (
    <LayoutMain>
      <Box
        fontSize="9xl"
        as="div"
        textAlign="center"
        w="full"
        left="0"
        top={"20"}
        fontWeight="bold"
        position="absolute"
        bgGradient="linear(to-b, whiteAlpha.200, transparent)"
        bgClip="text"
        zIndex="1"
        // wait wait hold on this is not title, it just background
      >
        IMPLEMENTATION
      </Box>
      <RoadmapHeader zIndex="10" position="relative" />
      <RoadmapTimeLine />
    </LayoutMain>
  );
};
export default Roadmap;
