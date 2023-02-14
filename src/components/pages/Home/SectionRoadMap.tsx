import { Box, Heading, Stack, Text } from "@chakra-ui/react";
import { TimeLine } from "components/Section";

export const SectionRoadmap = () => {
  const left = {
    before: {
      content: '" "',
      height: 0,
      position: "absolute",
      top: 8,
      width: 0,
      zIndex: 1,
      right: "5rem",
      borderWidth: 3,
      borderColor: "yellowMetaxot.500",
      transform: "scaleX(24.5)",
    },
    after: {
      content: '" "',
      position: "absolute",
      width: "25px",
      height: "25px",
      backgroundColor: "white",
      border: "4px solid #FF9F55",
      top: 5,
      borderRadius: "50%",
      zIndex: "1",
      right: 0,
    },
  };
  const right = {
    before: {
      content: '" "',
      height: 0,
      position: "absolute",
      top: "7",
      width: 0,
      zIndex: 1,
      right: -55,
      borderWidth: 3,
      borderColor: "yellowMetaxot.500",
      transform: "scaleX(24.5)",
    },
    after: {
      content: '" "',
      position: "absolute",
      width: "25px",
      height: "25px",
      backgroundColor: "white",
      border: "4px solid #FF9F55",
      top: 5,
      borderRadius: "50%",
      zIndex: "1",
      right: 0,
    },
  };
  return (
    <Stack py="8">
      <Stack textAlign="center">
        <Text fontSize={{ lg: "2xl", base: "xl" }} color="yellowMetaxot.500">
          ACHIEVEMENT AND GOALS
        </Text>
        <Heading fontSize={{ lg: "5xl", base: "3xl" }}>PROJECT ROADMAP</Heading>
      </Stack>

      {/* <Stack position="relative" margin="0 auto" py={100}>
        <Stack
          px={16}
          position="relative"
          width="50%"
          left={"0"}
          _after={{
            content: "' '",
            borderRight: "solid",
            borderRightColor: "yellowMetaxot.500",
            borderRightWidth: "5px",
            w: 10,
            h: 10,
            transform: "scaleY(5.5)",
            left: "calc(100% + 0.9rem)",
            position: "relative",
          }}
        >
          <Stack _before={left.before} _after={left.after}>
            <Text>2017 - 2018</Text>
            <Text>The Idea Of Metaxot is Born</Text>
          </Stack>
        </Stack>
      </Stack> */}
      <Stack py="16">
        <TimeLine />
      </Stack>
    </Stack>
  );
};
