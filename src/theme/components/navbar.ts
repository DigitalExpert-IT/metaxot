import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";

// This function creates a set of function that helps us create multipart component styles.
const { defineMultiStyleConfig } = createMultiStyleConfigHelpers([
  "main",
  "body",
  "drawer",
  "list",
  "listWrapper",
]);

export const navbarTheme = defineMultiStyleConfig({
  baseStyle: {
    main: {
      py: "6",
      w: "full",
      zIndex: 5,
      pos: "fixed",
      transition: "0.5s",
    },
  },
  sizes: {
    sm: {},
    md: {},
  },
  variants: {
    bold: {},
    colorful: {},
  },
  defaultProps: {
    size: "md",
  },
});
