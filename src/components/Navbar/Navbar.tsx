import {
  NavbarBody,
  NavbarMain,
  NavbarItemList,
  NavbarBrandDrawer,
  NavbarItemWrapper,
} from "./NavbarUtils";
import React from "react";
import { NAVIGATION } from "constant";
import { Flex, Button, useDisclosure } from "@chakra-ui/react";

export const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <NavbarMain isOpen={isOpen}>
      <NavbarBody>
        <NavbarBrandDrawer
          isOpen={isOpen}
          onOpen={onOpen}
          onClose={onClose}
          data={NAVIGATION}
        />
        <NavbarItemWrapper>
          <NavbarItemList data={NAVIGATION} />
        </NavbarItemWrapper>
        <Flex
          gap={2}
          flex={1}
          justify="right"
          alignItems="center"
          display={{ base: "none", md: "none", lg: "flex" }}
        >
          <Button colorScheme={"metaxot"}>Connect Wallet</Button>
        </Flex>
      </NavbarBody>
    </NavbarMain>
  );
};
