import {
  Box,
  Text,
  Image,
  Stack,
  Button,
  HStack,
  Heading,
} from "@chakra-ui/react";
import { Trans } from "react-i18next";
import { CircleGalaxy } from "components";

export const SectionHeader = () => {
  return (
    <HStack justifyContent="space-between" alignItems={"center"}>
      <CircleGalaxy />
      <Stack spacing={8} zIndex="4">
        <Heading
          size={{ md: "3xl", base: "2xl" }}
          lineHeight={{ md: "4.5rem", base: "1" }}
          fontWeight="600"
        >
          <Trans
            components={{ br: <br /> }}
            i18nKey={"pages.home.header.title"}
          />
        </Heading>
        <Text>
          <Trans
            components={{ br: <br /> }}
            i18nKey={"pages.home.header.subtitle"}
          />
        </Text>
        <Box>
          <Button colorScheme="metaxot">Download Metaxot</Button>
        </Box>
      </Stack>
      <Stack display={{ lg: "flex", md: "none", base: "none" }}>
        <Image
          zIndex={2}
          rounded={"full"}
          alt="masking-circle"
          src="/assets/illustration/masking_circle.svg"
          position="relative"
          bg="black"
        ></Image>
      </Stack>
    </HStack>
  );
};
