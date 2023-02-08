import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";

// This function creates a set of function that helps us create multipart component styles.
const { defineMultiStyleConfig } = createMultiStyleConfigHelpers([
  "main",
  "body",
  "drawer",
  "list",
  "listWrapper",
  "dropDownList",
  "dropDownItem",
]);

export const navbarTheme = defineMultiStyleConfig({
  baseStyle: {
    main: {
      zIndex: 5,
      pos: "fixed",
      transition: "0.5s",
    },
    body: {
      alignItems: "center",
      justify: "space-around",
    },
    drawer: {
      flex: 1,
      align: "center",
      direction: "row",
      justify: "space-between",
    },
    listWrapper: {
      flex: 3,
      align: "center",
      direction: "row",
      justify: "center",
      fontFamily: "angkor",
      textAlign: "center",
      textTransform: "capitalize",
      display: { base: "none", md: "none", lg: "flex" },
    },
    dropDownList: {
      bg: "gray.800",
    },
    dropDownItem: {
      role: "group",
      align: "center",
      direction: "row",
      _hover: { bg: "brand.300" },
      transition: "all .3s ease",
    },
  },
  sizes: {
    base: {},
    sm: {},
    md: {
      main: {
        py: "6",
        w: "full",
      },
      listWrapper: {
        fontSize: "20px",
        fontWeight: "400",
      },
      dropDownList: {
        p: "4",
        maxW: "xs",
        border: "0",
        rounded: "xl",
        boxShadow: "xl",
      },
      dropDownItem: {
        p: "2",
        rounded: "md",
      },
    },
    lg: {},
  },
  variants: {
    bold: {},
    colorful: {},
  },
  defaultProps: {
    size: "md",
  },
});
