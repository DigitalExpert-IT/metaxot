import { Box, BoxProps, Stack, Text } from "@chakra-ui/react";

export const MobileTimeLine = () => {
  const afterTemplate = {
    content: "''",
    w: 5,
    h: 5,
    bg: "black",
    display: "block",
    position: "absolute",
    right: "50%",
    rounded: "full",
    border: 3,
    borderStyle: "solid",
    borderColor: "yellowMetaxot.500",
    bottom: -3,
    boxShadow: "inset 0px 0px 0 3px white",
  };

  const beforeTemplate = {
    content: "''",
    display: "block",
    h: "4.5rem",
    w: 1,
    bg: "yellowMetaxot.500",
    position: "absolute",
    right: "calc(50% + 7px)",
    top: "-4.5rem",
  };

  return (
    <Stack spacing={20}>
      <Box
        border={2}
        borderStyle="solid"
        rounded="lg"
        p={4}
        borderColor="yellowMetaxot.500"
        position={"relative"}
        _after={afterTemplate}
      >
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic impedit
          soluta suscipit neque, illo corrupti explicabo provident a ad. Quo
          minus facilis sequi facere commodi quisquam ad dolore eos accusamus!
        </Text>
      </Box>
      <MobileRoadMapTimeLine>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic impedit
          soluta suscipit neque, illo corrupti explicabo provident a ad. Quo
          minus facilis sequi facere commodi quisquam ad dolore eos accusamus!
        </Text>
      </MobileRoadMapTimeLine>
    </Stack>
  );
};

interface MobileRoadMapTimeLineProps extends BoxProps {
  mode?: string | "first" | "last";
}

const MobileRoadMapTimeLine: React.FC<MobileRoadMapTimeLineProps> = props => {
  const { mode, children, ...rest } = props;
  const afterTemplate = {
    content: "''",
    w: 5,
    h: 5,
    bg: "black",
    display: "block",
    position: "absolute",
    right: "50%",
    rounded: "full",
    border: 3,
    borderStyle: "solid",
    borderColor: "yellowMetaxot.500",
    bottom: -3,
    boxShadow: "inset 0px 0px 0 3px white",
  };
  const beforeTemplate = {
    content: "''",
    display: "block",
    h: "4.5rem",
    w: 1,
    bg: "yellowMetaxot.500",
    position: "absolute",
    right: "calc(50% + 7px)",
    top: "-4.5rem",
  };

  return (
    <Box
      border={2}
      borderStyle="solid"
      rounded="lg"
      p={4}
      borderColor="yellowMetaxot.500"
      position={"relative"}
      _before={mode === "last" ? beforeTemplate : {}}
      _after={mode === "first" ? afterTemplate : {}}
      {...rest}
    >
      {children}
    </Box>
  );
};
