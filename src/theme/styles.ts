import { Styles } from "@chakra-ui/theme-tools";

export const styles: Styles = {
  global: {
    body: {
      fontFamily: "body",
      color: "chakra-body-text",
      bg: "chakra-body-bg",
      transitionProperty: "background-color",
      transitionDuration: "normal",
      lineHeight: "base",
      overflowX: "hidden",
    },
    "*::placeholder": {
      color: "chakra-placeholder-color",
    },
    "*, *::before, &::after": {
      borderColor: "chakra-border-color",
      wordWrap: "break-word",
    },
    "::-webkit-scrollbar": {
      width: "4px",
    },
    "::-webkit-scrollbar-track": {
      background: "#0c0d12",
    },
    /* Handle */
    "::-webkit-scrollbar-thumb": {
      background: "#6779F3",
      borderRadius: "8px",
    },
    /* Handle on hover */
    "::-webkit-scrollbar-thumb:hover": {
      background: "#555",
    },
  },
};
