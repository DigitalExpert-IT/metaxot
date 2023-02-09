import {
  Box,
  Button,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { CircleGalaxy } from "components/Animation";

export const SectionHeader = () => {
  return (
    <HStack>
      <CircleGalaxy />
      <Stack spacing={8} zIndex="4">
        <Heading size="3xl" lineHeight="4.5rem">
          DISCOVER <br /> METAVERSE <br /> FIND OPPORTUNITY
        </Heading>
        <Text>
          Set all opportunity to become good in future through new technology in
          every part of life.
        </Text>
        <Box>
          <Button colorScheme="metaxot">Download Metaxot</Button>
        </Box>
      </Stack>
      <Stack display={{ lg: "flex", md: "none", base: "none" }}>
        <Image
          bg="black"
          rounded={"full"}
          src="/assets/illustration/masking_circle.svg"
          alt="masking-circle"
          zIndex={2}
          position="relative"
        ></Image>
      </Stack>
    </HStack>
  );
};
