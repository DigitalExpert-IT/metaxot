import { Box, Stack, Text } from "@chakra-ui/react";

export const RoadmapDate = () => {
  return (
    <Stack direction="row" textAlign="center" fontSize={"xl"} fontWeight="bold">
      <Box
        bgGradient="linear(100deg, whiteAlpha.500, transparent)"
        rounded="full"
        w="24"
        h="24"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box>
          <Text>2</Text>
          <Text>Month</Text>
        </Box>
      </Box>
      <Box display="flex" alignItems={"center"}>
        :
      </Box>
      <Box
        bgGradient="linear(100deg, whiteAlpha.500, transparent)"
        rounded="full"
        w="24"
        h="24"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box>
          <Text>12</Text>
          <Text>Days</Text>
        </Box>
      </Box>
    </Stack>
  );
};
