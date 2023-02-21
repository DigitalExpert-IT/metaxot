import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";

// This function creates a set of function that helps us create multipart component styles.
const { defineMultiStyleConfig } = createMultiStyleConfigHelpers([
  "main",
  "item",
]);

export const roadmapListTheme = defineMultiStyleConfig({
  baseStyle: {
    main: {
      position: "relative",
      _before: {
        content: "''",
        display: "block",
        position: "absolute",
        bg: "whiteAlpha.800",
      },
    },
    item: {
      position: "relative",
      w: "25vw",
      bgGradient: "linear(130deg, whiteAlpha.500, transparent)",
      rounded: "lg",
      listStyleType: "none",
    },
  },
  sizes: {
    base: {},
    sm: {},
    md: {
      main: {
        w: "40vh",
        h: "100vh",
        marginY: "10",
        _before: {
          w: "1px",
          h: "100vh",
          right: "50%",
        },
      },
    },
    lg: {},
  },
  variants: {
    dekstop: {},
  },
  defaultProps: {
    size: "md",
  },
});
