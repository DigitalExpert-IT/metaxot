import { Box, BoxProps, Stack, Text } from "@chakra-ui/react";
import { TimeLineProps } from "./TimeLine";
import { Trans } from "react-i18next";

export const MobileTimeLine: React.FC<TimeLineProps> = props => {
  const { q1, q2, q3, q4, q5 } = props;
  return (
    <Stack spacing={20} py="20" w="40" textAlign={"center"}>
      <MobileRoadMapTimeLine mode="first">
        <Text>
          <Trans
            i18nKey={q1}
            components={{
              span: <span style={{ display: "table" }}></span>,
            }}
          ></Trans>
        </Text>
      </MobileRoadMapTimeLine>
      <MobileRoadMapTimeLine>
        <Text>
          <Trans
            i18nKey={q2}
            components={{
              span: <span style={{ display: "table" }}></span>,
            }}
          ></Trans>
        </Text>
      </MobileRoadMapTimeLine>
      <MobileRoadMapTimeLine p="0">
        <Box
          w="full"
          bg="yellowMetaxot.500"
          p="1"
          color="gray.800"
          fontWeight="bold"
        >
          <Trans
            i18nKey={q3.title}
            components={{
              span: <span style={{ display: "table" }}></span>,
            }}
          ></Trans>
        </Box>
        <Box w="full" bg="gray.800" roundedBottom="lg" p="1">
          <Trans
            i18nKey={q3.concept}
            components={{
              span: <span style={{ display: "table" }}></span>,
            }}
          ></Trans>
        </Box>
      </MobileRoadMapTimeLine>
      <MobileRoadMapTimeLine>
        <Text>
          <Trans
            i18nKey={q4}
            components={{
              span: <span></span>,
            }}
          ></Trans>
        </Text>
      </MobileRoadMapTimeLine>
      <MobileRoadMapTimeLine mode="last">
        <Text>
          <Trans
            i18nKey={q5}
            components={{
              span: <span style={{ display: "table" }}></span>,
            }}
          ></Trans>
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
      _before={
        mode === "last"
          ? beforeTemplate
          : mode !== "first"
          ? beforeTemplate
          : {}
      }
      _after={
        mode === "first" ? afterTemplate : mode !== "last" ? afterTemplate : {}
      }
      {...rest}
    >
      {children}
    </Box>
  );
};
