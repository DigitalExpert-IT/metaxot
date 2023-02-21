import {
  Box,
  Text,
  Image,
  Stack,
  Heading,
  ListItem,
  ListItemProps,
} from "@chakra-ui/react";

interface RoadmapListItemProps extends ListItemProps {
  mode: string | "left" | "right";
  title?: string;
  content?: string;
  quartal?: string;
}

export const RoadmapListItem: React.FC<RoadmapListItemProps> = props => {
  const { title, content, quartal, mode, ...rest } = props;
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
        <Heading fontSize="xl">{title}</Heading>
        <Text>{content}</Text>
      </Stack>
      <Box
        position="absolute"
        right={mode === "right" ? {} : left.date}
        left={mode === "right" ? right.date : {}}
        bottom="9vh"
      >
        <Text>{quartal}</Text>
      </Box>
    </ListItem>
  );
};

RoadmapListItem.defaultProps = {
  title: "Title Road Map",
  content:
    " Lorem ipsum dolor sit amet. Et corporis iste nam necessitatibus voluptas qui sapiente libero Est cumque beatae qui molestiasdoloribus.",
  quartal: "2019, July Q1",
};
