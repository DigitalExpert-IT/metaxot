import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";

// This function creates a set of function that helps us create multipart component styles.
const { defineMultiStyleConfig } = createMultiStyleConfigHelpers([
  "main",
  "quartal",
]);

export const roadmapListItemTheme = defineMultiStyleConfig({
  baseStyle: {},
  sizes: {
    base: {},
    sm: {},
    md: {},
    lg: {},
  },
  variants: {
    left: {
      quartal: {
        position: "absolute",
        bottom: "9vh",
        left: "-20vw",
      },
    },
    right: {},
    mobile: {
      quartal: {
        position: "relative",
        top: "0",
      },
    },
  },
  defaultProps: {
    variant: "left",
    size: "md",
  },
});
