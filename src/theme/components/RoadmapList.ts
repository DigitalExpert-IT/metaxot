import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";

// This function creates a set of function that helps us create multipart component styles.
const { defineMultiStyleConfig } = createMultiStyleConfigHelpers([
  "main",
  "item",
]);

export const roadmapListTheme = defineMultiStyleConfig({
  baseStyle: {},
  sizes: {
    base: {},
    sm: {},
    md: {},
    lg: {},
  },
  variants: {},
  defaultProps: {
    size: "md",
  },
});
