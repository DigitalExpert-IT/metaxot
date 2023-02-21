import { ListProps, UnorderedList } from "@chakra-ui/react";

export const RoadmapList: React.FC<ListProps> = props => {
  const { children, ...rest } = props;
  return (
    <UnorderedList
      w="40vh"
      position="relative"
      h="100vh"
      _before={{
        content: "''",
        display: "block",
        w: "1px",
        h: "100vh",
        position: "absolute",
        right: "50%",
        bg: "whiteAlpha.800",
      }}
      {...rest}
    >
      {children}
    </UnorderedList>
  );
};
