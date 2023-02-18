import React from "react";
import { Box, Image, Stack, BoxProps, StackProps } from "@chakra-ui/react";

interface SectionProps extends StackProps {
  size?: string;
  variants?: string | "reverse";
  image: string;
}

export const SectionMain: React.FC<SectionProps> = props => {
  const { size, variants, ...rest } = props;
  return (
    <Stack
      py={6}
      direction={{
        md: "column",
        base: "column",
        lg: variants ? "row-reverse" : "row",
      }}
      {...rest}
    >
      <Image src={props.image} alt="image" rounded="3xl"></Image>
      <Stack
        flex={1}
        pl={variants === "reverse" ? {} : { lg: "10", md: "0" }}
        spacing={{ lg: "6", md: "4", base: "2" }}
      >
        {props.children}
      </Stack>
    </Stack>
  );
};

export const SectionBody: React.FC<StackProps> = props => {
  return (
    <Stack spacing={{ lg: "6", md: "4", base: "2" }}>{props.children}</Stack>
  );
};

export const SectionFooter: React.FC<BoxProps> = props => {
  return <Box {...props}>{props.children}</Box>;
};
