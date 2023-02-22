import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";

// This function creates a set of function that helps us create multipart component styles.
const { defineMultiStyleConfig } = createMultiStyleConfigHelpers([
  "main",
  "item",
]);

export const roadmapListTheme = defineMultiStyleConfig({
  baseStyle: {
    main: {
      w: { lg: "25vw", base: "100%" },
      transition: "ease-in 0.2s",
      h: "100vh",
      pl: "10",
      marginY: { lg: "10", base: "0" },
      position: "relative",
      _before: {
        content: "''",
        display: "block",
        position: "absolute",
        bg: "whiteAlpha.800",
        w: "1px",
        h: { lg: "100vh", base: "67vh" },
        right: { lg: "50%", base: "calc(100% - 1rem)" },
      },
    },
    item: {
      position: { lg: "relative", base: "unset" },
      w: { lg: "25vw", base: "100%" },
      bgGradient: "linear(130deg, whiteAlpha.500, transparent)",
      rounded: "lg",
      listStyleType: "none",
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
      main: {},
      item: {},
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
