import {
  Box,
  Button,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { SectionBody, SectionFooter } from "components/Section";
import React from "react";

export const SectionExplore = () => {
  return (
    <Box
      mx={"auto"}
      my={"20"}
      rounded={"3xl"}
      position={"relative"}
      maxW={{ base: "sm", lg: "full" }}
    >
      <Image
        w={"full"}
        src={"/assets/images/ExploreLand.png"}
        alt={"ExploreLand"}
        display={{ base: "none", lg: "block" }}
      />
      <Image
        w={"full"}
        src={"/assets/images/ExploreLandMobile.png"}
        alt={"ExploreLand"}
        display={{ base: "block", lg: "none" }}
      />
      <VStack
        position={"absolute"}
        top={{ base: "30%", lg: 0 }}
        bottom={0}
        right={0}
        px={"4"}
        left={{ base: 0, lg: "50%" }}
        justifyContent={"center"}
        w={{ base: "full", lg: "50%" }}
      >
        <Box maxW={{ base: "full", lg: "md" }} pr={{ lg: "4" }}>
          <Stack spacing={{ xl: "4", lg: "0", base: "2" }}>
            <Text
              fontSize={{ lg: "2xl", base: "xl" }}
              color="yellowMetaxot.500"
            >
              EXPLORE
            </Text>
            <Heading
              fontSize={{ lg: "4xl", base: "2xl" }}
              fontWeight={"black"}
              color={"black"}
            >
              GET YOUR METAXOT LAND
            </Heading>
            <Text fontSize="sm" textAlign={"justify"}>
              Lorem ipsum dolor sit amet. Et corporis iste nam necessitatibus
              voluptas qui sapiente libero. Est cumque beatae qui. Lorem ipsum
              dolor sit amet.
            </Text>
          </Stack>
          <Box mt={"4"}>
            <Button colorScheme={"metaxot"}>Buy Land</Button>
          </Box>
        </Box>
      </VStack>
    </Box>
  );
};
