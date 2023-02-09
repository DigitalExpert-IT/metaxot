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
import { useTranslation, Trans } from "react-i18next";

export const SectionHeader = () => {
  const { t } = useTranslation();
  return (
    <HStack justifyContent="space-between" alignItems={"center"}>
      <CircleGalaxy />
      <Stack spacing={8} zIndex="4">
        <Heading
          size={{ md: "3xl", base: "2xl" }}
          lineHeight={{ md: "4.5rem", base: "1" }}
        >
          <Trans
            i18nKey={"pages.home.header.title"}
            components={{ br: <br /> }}
          />
        </Heading>
        <Text>
          <Trans
            i18nKey={"pages.home.header.subtitle"}
            components={{ br: <br /> }}
          />
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
