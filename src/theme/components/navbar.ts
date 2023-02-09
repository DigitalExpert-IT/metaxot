import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";

// This function creates a set of function that helps us create multipart component styles.
const { defineMultiStyleConfig } = createMultiStyleConfigHelpers([
  "main",
  "body",
  "drawer",
  "drawerBurger",
  "list",
  "listWrapper",
  "dropDownList",
  "dropDownItem",
  "dropCarret",
  "dropIcon",
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
    drawerBurger: {
      fontSize: "xl",
      variant: "ghost",
      "aria-label": "open-menu",
      display: { base: "flex", md: "flex", lg: "none" },
    },
    listWrapper: {
      flex: 3,
      align: "center",
      direction: "row",
      justify: "center",
      textAlign: "center",
      textTransform: "capitalize",
      display: { base: "none", md: "none", lg: "flex" },
    },
    dropDownList: {},
    dropDownItem: {
      role: "group",
      align: "center",
      direction: "row",
      transition: "all .3s ease",
    },
    dropCarret: {
      flex: 1,
      align: "center",
      justify: "flex-end",
      transition: "all .3s ease",
      transform: "translateX(-10px)",
      _groupHover: {
        opacity: "100%",
        transform: "translateX(0)",
      },
    },
    dropIcon: {},
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
      dropCarret: {
        transform: "translateX(-10px)",
      },
      dropIcon: {
        w: 5,
        h: 5,
      },
    },
    lg: {},
  },
  variants: {
    angkor: {
      listWrapper: {
        fontFamily: "angkor",
      },
      dropIcon: {
        color: "valhalla.500",
      },
      dropDownList: {
        bg: "gray.800",
      },
      dropDownItem: {
        _hover: { bg: "brand.300" },
      },
    },
  },
  defaultProps: {
    size: "md",
    variant: "angkor",
  },
});
