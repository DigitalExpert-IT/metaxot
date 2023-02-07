import { useEffect, useState } from "react";
import { Box, BoxProps, useMultiStyleConfig } from "@chakra-ui/react";
import { createStylesContext } from "@chakra-ui/system";

interface NavbarMainProps extends BoxProps {
  isOpen?: boolean;
}

export const NavbarMain: React.FC<NavbarMainProps> = props => {
  const { isOpen } = props;
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

  const styles = useMultiStyleConfig("navbarTheme");
  const [StylesProvider] = createStylesContext("navbarTheme");

  return (
    <Box
      __css={styles.main}
      as="nav"
      boxShadow={scrolled ? "dark-lg" : "none"}
      bg={isOpen ? "gray.800" : scrolled ? "gray.800" : "transparent"}
      {...props}
    >
      <StylesProvider value={styles}>{props.children}</StylesProvider>
    </Box>
  );
};
