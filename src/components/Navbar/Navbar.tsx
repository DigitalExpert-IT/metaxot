import {
  NavbarBody,
  NavbarMain,
  NavbarItemList,
  NavbarBrandDrawer,
  NavbarItemWrapper,
} from "./NavbarUtils";
import React from "react";
import { NAVIGATION } from "constant";
import { Flex, useDisclosure } from "@chakra-ui/react";
import { ConnectWallet, darkTheme } from "@thirdweb-dev/react";

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
          {/* <Button colorScheme={"metaxot"}>Connect Wallet</Button> */}
          <ConnectWallet
            theme={darkTheme({
              colors: {
                primaryButtonBg: "#b51aff",
                primaryButtonText: "#FFFF",
              },
            })}
            btnTitle={"Connect Wallet"}
            modalTitle={"Supported Wallet"}
            modalSize={"wide"}
            welcomeScreen={{
              img: {
                src: `http://${window.location.host}/assets/logo/metaxot.svg`,
                width: 150,
                height: 150,
              },
            }}
          />
        </Flex>
      </NavbarBody>
    </NavbarMain>
  );
};
