import { useEffect, useState } from "react";
import { Box, BoxProps } from "@chakra-ui/react";

interface NavbarMainProps extends BoxProps {
  isopen?: boolean;
}

export const NavbarMain: React.FC<NavbarMainProps> = props => {
  const { isopen } = props;
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
  return (
    <Box
      py="6"
      w="full"
      zIndex={5}
      bg={isopen ? "gray.800" : scrolled ? "gray.800" : "transparent"}
      boxShadow={scrolled ? "dark-lg" : "none"}
      pos="fixed"
      transition="0.5s"
      as="nav"
    >
      {props.children}
    </Box>
  );
};
