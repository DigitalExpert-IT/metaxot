import { Stack, StackProps, Text } from "@chakra-ui/react";
import React from "react";
import { Trans } from "react-i18next";

type Props = StackProps & {
  subtitle: string;
};

export const CardMissionPresentation = (props: Props) => {
  const { subtitle, ...rest } = props;
  return (
    <Stack pt={"28"} pb={"16"} mx={"auto"} {...rest}>
      {props.children}
      <Text>
        <Trans components={{ br: <br /> }} i18nKey={subtitle} />
      </Text>
    </Stack>
  );
};

export const CardPresentation = (props: Props) => {
  const { subtitle, ...rest } = props;
  return (
    <Stack
      pt={"28"}
      pb={"16"}
      mx={"auto"}
      px={{ base: "4", md: "8", lg: "12" }}
      rounded={"5xl"}
      spacing={{ base: 2, md: 4, lg: 6 }}
      bgGradient={"linear(to-tl, blackAlpha.500, whiteAlpha.400)"}
      {...rest}
    >
      {props.children}
      <Text textAlign={"justify"}>
        <Trans components={{ br: <br /> }} i18nKey={subtitle} />
      </Text>
    </Stack>
  );
};
