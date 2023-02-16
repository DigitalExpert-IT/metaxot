import { Stack, StackProps } from "@chakra-ui/react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const WidgetCollection: React.FC<StackProps> = props => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1124 },
      items: 2.5,
    },
    tabletXl: {
      breakpoint: { max: 1124, min: 991 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 991, min: 861 },
      items: 2.5,
    },
    tabletM: {
      breakpoint: { max: 861, min: 614 },
      items: 2,
    },
    mobileXl: {
      breakpoint: { max: 614, min: 464 },
      items: 1.5,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <Stack>
      <Carousel responsive={responsive}>{props.children}</Carousel>
    </Stack>
  );
};
