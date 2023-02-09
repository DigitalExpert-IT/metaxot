import { useEffect, useState, createContext } from "react";
import { Box, BoxProps, useMultiStyleConfig } from "@chakra-ui/react";

interface NavbarMainProps extends BoxProps {
  size?: string;
  isOpen?: boolean;
  variants?: string;
}

export const ThemeContext = createContext<any>({});

export const NavbarMain: React.FC<NavbarMainProps> = props => {
  const { isOpen, size, variants, ...rest } = props;
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

  const styles = useMultiStyleConfig("Navbar", { size, variants });

  return (
    <Box
      as="nav"
      __css={styles.main}
      boxShadow={scrolled ? "dark-lg" : "none"}
      bg={isOpen ? "gray.800" : scrolled ? "gray.800" : "transparent"}
      {...rest}
    >
      <ThemeContext.Provider value={styles}>
        {props.children}
      </ThemeContext.Provider>
    </Box>
  );
};
