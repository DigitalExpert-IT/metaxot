import { Stack, StackProps, Text } from "@chakra-ui/react";
import React from "react";
import { Trans } from "react-i18next";

type Props = StackProps & {
  subtitle?: string;
};

export const CardPresentation = (props: Props) => {
  const { subtitle, ...rest } = props;
  return (
    <Stack pt={"28"} pb={"16"} mx={"auto"} {...rest}>
      {props.children}
      <Text textAlign={"justify"}>
        <Trans components={{ br: <br /> }} i18nKey={subtitle} />
      </Text>
    </Stack>
  );
};
