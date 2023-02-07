import {
  Box,
  Flex,
  Stack,
  Image,
  Button,
  Container,
  IconButton,
  AspectRatio,
  useMediaQuery,
  useDisclosure,
} from "@chakra-ui/react";
import Link from "next/link";
import { NAVIGATION } from "constant";
import { GiHamburgerMenu } from "react-icons/gi";
import React, { useState, useEffect } from "react";
import { DrawerMobileNav, NavbarMenu } from "components";

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
      py="6"
      w="full"
      zIndex={5}
      bg={isOpen ? "gray.800" : scrolled ? "gray.800" : "transparent"}
      boxShadow={scrolled ? "dark-lg" : "none"}
      pos="fixed"
      transition="0.5s"
      as="nav"
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
            display={{ base: "none", md: "none", lg: "flex" }}
            justify="center"
            align="center"
            flex={3}
            textTransform="capitalize"
            fontSize="20px"
            textAlign={"center"}
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
            <Button colorScheme={"metaxot"}>Connect Wallet</Button>
            {/* <ButtonConnectWallet /> */}
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};
