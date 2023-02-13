import { Box, Heading, Stack, Text } from "@chakra-ui/react";

export const SectionRoadmap = () => {
  const left = {
    before: {
      content: '" "',
      height: 0,
      position: "absolute",
      top: "22px",
      width: 0,
      zIndex: 1,
      right: "30px",
      border: "medium solid white",
      borderWidth: "10px 0 10px 10px",
      borderColor: "transparent transparent transparent white",
    },
    after: {
      content: '" "',
      position: "absolute",
      width: "25px",
      height: "25px",
      backgroundColor: "white",
      border: "4px solid #FF9F55",
      top: "15px",
      borderRadius: "50%",
      zIndex: "1",
      right: "-9px",
    },
  };
  const right = {
    before: {
      content: '" "',
      height: 0,
      position: "absolute",
      top: "22px",
      width: 0,
      zIndex: 1,
      left: "30px",
      border: "medium solid white",
      borderWidth: "10px 10px 10px 0",
      borderColor: "transparent white transparent transparent",
    },
    after: {
      content: '" "',
      position: "absolute",
      width: "25px",
      height: "25px",
      backgroundColor: "white",
      border: "4px solid #FF9F55",
      top: "15px",
      borderRadius: "50%",
      zIndex: 1,
      left: "-16px",
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

      <Stack position="relative" bg="red.500" margin="0 auto">
        <Stack
          padding="10px 40px"
          position="relative"
          width="50%"
          _before={left.before}
          _after={left.after}
          left={"0"}
        >
          <Stack bg={"white"} color="black">
            <Text>2017 - 2018</Text>
            <Text>The Idea Of Metaxot is Born</Text>
          </Stack>
        </Stack>
        <Stack
          padding="10px 40px"
          position="relative"
          width="50%"
          left={"50%"}
          _before={right.before}
          _after={right.after}
        >
          <Stack bg="red.200" color="gray.800">
            <Text>2017 - 2018</Text>
            <Text>The Idea Of Metaxot is Born</Text>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};
