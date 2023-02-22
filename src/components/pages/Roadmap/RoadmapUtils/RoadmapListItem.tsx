import {
  Box,
  Text,
  Image,
  Stack,
  Heading,
  ListItem,
  ListItemProps,
} from "@chakra-ui/react";
import { useContext } from "react";
import { RoadmapListContext } from "./RoadmapList";

interface RoadmapListItemProps extends ListItemProps {
  mode: string | "left" | "right";
  title?: string;
  content?: string;
  quartal?: string;
}

export const RoadmapListItem: React.FC<RoadmapListItemProps> = props => {
  const { title, content, quartal, mode, ...rest } = props;
  const styles = useContext(RoadmapListContext);
  const left = {
    parent: "-20vw",
    date: { lg: "-25vw", base: "0" },
  };
  const right = {
    parent: "20vw",
    date: { lg: "-25vw", base: "0" },
  };

  return (
    <ListItem
      left={mode === "right" ? right.parent : left.parent}
      {...styles.item}
      {...rest}
    >
      <Stack
        pl={{ lg: "20", base: "10" }}
        spacing="1rem"
        pb="9"
        pt="4"
        pr="4"
        mt="1rem"
      >
        <Image
          left="0"
          top={{ lg: "35%", base: "none" }}
          alt="roadmap"
          position={"absolute"}
          src="/assets/illustration/timelineVect.svg"
          display={{ lg: "block", base: "none" }}
        ></Image>
        <Heading fontSize="xl">{title}</Heading>
        <Text>{content}</Text>
      </Stack>
      <Box
        right={mode === "right" ? {} : left.date}
        left={mode === "right" ? right.date : {}}
        position={{ lg: "absolute", base: "relative" }}
        bottom={{ lg: "9vh", md: "11rem", sm: "14rem", base: "18rem" }}
        bg={{ lg: "none", base: "gray.100" }}
        color={{ lg: "gray.100", base: "gray.800" }}
        rounded="xl"
        maxW="8rem"
        p="1"
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
