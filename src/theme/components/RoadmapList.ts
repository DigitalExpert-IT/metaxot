import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";

// This function creates a set of function that helps us create multipart component styles.
const { defineMultiStyleConfig } = createMultiStyleConfigHelpers([
  "main",
  "item",
]);

export const roadmapListTheme = defineMultiStyleConfig({
  baseStyle: {
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
  sizes: {
    base: {},
    sm: {},
    md: {},
    lg: {},
  },
  variants: {
    dekstop: {
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
    mobile: {
      main: {
        position: "relative",
        _before: {
          content: "''",
          display: "block",
          position: "absolute",
          bg: "whiteAlpha.800",
          left: "-5",
        },
      },
      item: {
        w: "100%",
        bgGradient: "linear(130deg, whiteAlpha.500, transparent)",
        rounded: "lg",
        listStyleType: "none",
      },
    },
  },
  defaultProps: {},
});
