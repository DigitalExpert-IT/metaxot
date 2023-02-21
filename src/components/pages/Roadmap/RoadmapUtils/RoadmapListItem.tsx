import {
  Box,
  Heading,
  Image,
  ListItem,
  ListItemProps,
  Stack,
  Text,
} from "@chakra-ui/react";

interface RoadmapListItemProps extends ListItemProps {
  mode: string | "left" | "right";
}

export const RoadmapListItem: React.FC<RoadmapListItemProps> = props => {
  const { mode, ...rest } = props;
  const left = {
    parent: "-20vw",
    date: "-25vw",
  };
  const right = {
    parent: "20vw",
    date: "-25vw",
  };
  return (
    <ListItem
      position="absolute"
      left={mode === "right" ? right.parent : left.parent}
      w={"25vw"}
      bgGradient="linear(130deg, whiteAlpha.500, transparent)"
      rounded="lg"
      listStyleType="none"
      {...rest}
    >
      <Stack pl="20" spacing="1rem" pb="9" pt="4" pr="4">
        <Image
          src="/assets/illustration/timelineVect.svg"
          alt="roadmap"
          position="absolute"
          top="35%"
          left="0"
        ></Image>
        <Heading fontSize="xl">Conduct Market</Heading>
        <Text>
          Lorem ipsum dolor sit amet. Et corporis iste nam necessitatibus
          voluptas qui sapiente libero. Est cumque beatae qui molestias
          doloribus.
        </Text>
      </Stack>
      <Box
        position="absolute"
        right={mode === "right" ? {} : left.date}
        left={mode === "right" ? right.date : {}}
        bottom="9vh"
      >
        <Text>2019, July Q1</Text>
      </Box>
    </ListItem>
  );
};
