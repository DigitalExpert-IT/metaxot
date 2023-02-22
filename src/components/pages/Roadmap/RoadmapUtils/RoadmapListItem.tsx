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
  title?: string;
  content?: string;
  quartal?: string;
  mode: string | "left" | "right";
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
        pb="9"
        pt="4"
        pr="4"
        mt="1rem"
        spacing="1rem"
        pl={{ lg: "20", base: "10" }}
      >
        <Image
          left="0"
          alt="roadmap"
          position={"absolute"}
          top={{ lg: "35%", base: "none" }}
          display={{ lg: "block", base: "none" }}
          src="/assets/illustration/timelineVect.svg"
        ></Image>
        <Heading fontSize="xl">{title}</Heading>
        <Text>{content}</Text>
      </Stack>
      <Box
        p="1"
        maxW="8rem"
        rounded="xl"
        bg={{ lg: "none", base: "gray.100" }}
        left={mode === "right" ? right.date : {}}
        right={mode === "right" ? {} : left.date}
        color={{ lg: "gray.100", base: "gray.800" }}
        position={{ lg: "absolute", base: "relative" }}
        bottom={{ lg: "9vh", md: "11rem", sm: "14rem", base: "18rem" }}
      >
        <Text>{quartal}</Text>
      </Box>
    </ListItem>
  );
};

RoadmapListItem.defaultProps = {
  title: "Need Title",
  content: "need content",
  quartal: "2019, July Q1",
};
