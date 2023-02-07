import { useEffect, useState } from "react";
import { Box, BoxProps, useMultiStyleConfig } from "@chakra-ui/react";
import { createStylesContext } from "@chakra-ui/system";

interface NavbarMainProps extends BoxProps {
  isOpen?: boolean;
  size?: string;
  variants?: string;
}

export const NavbarMain: React.FC<NavbarMainProps> = props => {
  const { isOpen, size, variants } = props;
  const [scrolled, setScrolled] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      setScrolled(prevScrollPos > 0);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    if (prevScrollPos === 0) {
      setScrolled(false);
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, scrolled]);

  const style = useMultiStyleConfig("navbarTheme", { size, variants });
  const [StylesProvider] = createStylesContext("navbarTheme");

  return (
    <Box
      as="nav"
      __css={style.main}
      boxShadow={scrolled ? "dark-lg" : "none"}
      bg={isOpen ? "gray.800" : scrolled ? "gray.800" : "transparent"}
      {...props}
    >
      <StylesProvider value={style}>{props.children}</StylesProvider>
    </Box>
  );
};
