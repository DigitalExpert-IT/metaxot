import {
  Badge,
  Box,
  Center,
  Heading,
  Image,
  Stack,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";

export const SectionAboutUs = () => {
  return (
    <Stack py={16} direction={{ lg: "row", md: "column", base: "column" }}>
      <Image src="/assets/content/mars.png" alt="image" rounded="3xl"></Image>
      <Stack
        flex={1}
        pl={{ lg: "10", md: "0" }}
        spacing={{ lg: "6", md: "4", base: "2" }}
      >
        <Text fontSize={{ lg: "2xl", base: "xl" }} color="yellowMetaxot.500">
          ABOUT US
        </Text>
        <Heading fontSize={{ lg: "5xl", base: "3xl" }}>
          METAXOT <br /> IS FUTURE
        </Heading>
        <Text fontSize="sm">
          Lorem ipsum dolor sit amet. Et corporis iste nam necessitatibus
          voluptas qui sapiente libero. Est cumque beatae qui.
        </Text>
        <Wrap>
          <WrapItem>
            <Badge>Decentralize</Badge>
          </WrapItem>
          <WrapItem>
            <Badge>Imagnation</Badge>
          </WrapItem>
          <WrapItem>
            <Badge>Future World</Badge>
          </WrapItem>
          <WrapItem>
            <Badge>Fun Life</Badge>
          </WrapItem>
          <WrapItem>
            <Badge>Play To Earn</Badge>
          </WrapItem>
        </Wrap>
      </Stack>
    </Stack>
  );
};
