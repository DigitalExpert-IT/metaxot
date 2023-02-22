import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";

// This function creates a set of function that helps us create multipart component styles.
const { defineMultiStyleConfig } = createMultiStyleConfigHelpers([
  "main",
  "item",
]);

export const roadmapListTheme = defineMultiStyleConfig({
  baseStyle: {
    main: {
      w: { xl: "28vw", lg: "30vw", md: "100%", base: "100%" },
      position: { lg: "relative", base: "static" },
      _before: {
        content: "''",
        display: "block",
        position: "absolute",
        bg: "whiteAlpha.800",
        w: "2px",
        h: { lg: "100vh", base: "100vh" },
        right: { lg: "50%", base: "calc(100% - 1rem)" },
      },
    },
    item: {
      position: { lg: "relative", base: "unset" },
      w: { lg: "25vw", base: "100%" },
      bgGradient: "linear(130deg, whiteAlpha.500, transparent)",
      rounded: "lg",
      listStyleType: "none",
      mt: "20",
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
