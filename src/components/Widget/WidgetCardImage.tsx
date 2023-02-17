import { Box, BoxProps, Image } from "@chakra-ui/react";
import React from "react";

type TImage = {
  src: string;
  alt: string;
}

export type TWidgetCardImage = BoxProps & {
  data: TImage;
};

export const WidgetCardImage: React.FC<TWidgetCardImage> = props => {
  const { data, ...rest } = props;
  return (
    <Box boxSize="xs" h={"full"} w={"auto"} rounded={"4xl"} {...rest}>
      <Image mx={"auto"} h={"full"} src={data.src} alt={data.alt} />
    </Box>
  );
};
