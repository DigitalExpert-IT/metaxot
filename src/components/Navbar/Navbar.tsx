import React, { useState, useEffect } from "react";
import Link from "next/link";
import { NAVIGATION } from "constant";
import { GiHamburgerMenu } from "react-icons/gi";
import { DrawerMobileNav, NavbarMenu } from "components";
import {
  Box,
  Flex,
  Stack,
  useDisclosure,
  IconButton,
  useMediaQuery,
  Container,
  Image,
  AspectRatio,
  Button,
} from "@chakra-ui/react";

export const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [scrolled, setScrolled] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isLargethan800] = useMediaQuery("(min-width: 800px)");

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
      pt={{ base: "2", lg: "2" }}
      pb="2"
      w="full"
      zIndex={5}
      bg={isOpen ? "gray.800" : scrolled ? "gray.800" : "transparent"}
      boxShadow={scrolled ? "dark-lg" : "none"}
      pos="fixed"
      transition="0.5s"
    >
      <Container maxW="container.xl">
        <Flex alignItems="center" justify="space-around">
          <Stack
            direction="row"
            align="center"
            flex={1}
            justify="space-between"
          >
            <DrawerMobileNav
              data={NAVIGATION}
              isOpen={isOpen}
              onClose={onClose}
              logo="/assets/logo/metaxot.svg"
            />
            <IconButton
              variant="ghost"
              fontSize="xl"
              icon={<GiHamburgerMenu />}
              aria-label="open-menu"
              display={{ base: "flex", md: "flex", lg: "none" }}
              onClick={isOpen ? onClose : onOpen}
            />
            <Link href="/">
              <AspectRatio w="120px" h="20px" ratio={1}>
                <Image src={"/assets/logo/metaxot.svg"} alt="logo-image" />
              </AspectRatio>
            </Link>
          </Stack>
          <Stack
            direction="row"
            spacing="5"
            display={{ base: "none", md: "none", lg: "flex" }}
            justify="center"
            align="center"
            flex={1}
          >
            <NavbarMenu data={NAVIGATION} />
          </Stack>
          <Flex
            alignItems="center"
            gap={2}
            flex={1}
            justify="right"
            display={{ base: "none", md: "none", lg: "flex" }}
          >
            <Button>Connect</Button>
            {/* <ButtonConnectWallet /> */}
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};
