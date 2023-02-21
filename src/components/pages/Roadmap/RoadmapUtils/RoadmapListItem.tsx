import {
  Box,
  Text,
  Image,
  Stack,
  Heading,
  ListItem,
  ListItemProps,
  useStyles,
  useMultiStyleConfig,
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
  const style = useMultiStyleConfig("RoadmapListItem", {});
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
      left={mode === "right" ? right.parent : left.parent}
      {...styles.item}
      {...rest}
    >
      <Stack pl="20" spacing="1rem" pb="9" pt="4" pr="4" mt="1rem">
        <Image
          left="0"
          top="35%"
          alt="roadmap"
          position="absolute"
          src="/assets/illustration/timelineVect.svg"
        ></Image>
        <Heading fontSize="xl">{title}</Heading>
        <Text>{content}</Text>
      </Stack>
      <Box
        right={mode === "right" ? {} : left.date}
        left={mode === "right" ? right.date : {}}
        // position="absolute"
        // bottom="9vh"
        __css={style.quartal}
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
