import { Text, TextProps } from "@chakra-ui/react";

export const LabelCard = (props: TextProps) => {
  return (
    <Text fontSize={"xs"} color={"gray.500"} my={"1"}>
      {props.children}
    </Text>
  );
};
export const TitleCard = (props: TextProps) => {
  return (
    <Text fontSize={"xl"} mb={"3"}>
      {props.children}
    </Text>
  );
};
