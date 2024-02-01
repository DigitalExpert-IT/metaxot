import {
  NavbarBody,
  NavbarMain,
  NavbarItemList,
  NavbarBrandDrawer,
  NavbarItemWrapper,
} from "./NavbarUtils";
import React, { useEffect, useState } from "react";
import { NAVIGATION } from "constant";
import Link from "next/link";
import { Button, Flex, useDisclosure } from "@chakra-ui/react";
import { ConnectWallet, darkTheme } from "@thirdweb-dev/react";
import { useTranslation } from "react-i18next";
// import LoginModal from "components/AuthModal/LoginModal";
// import NiceModal from "@ebay/nice-modal-react";
import useAuth from "hooks/metaxotGame/useAuth";

export const Navbar = () => {
  const { t } = useTranslation();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [host, setHost] = useState("");
  const { isAuthenticated, logout } = useAuth();

  useEffect(() => {
    if (window.location.host) {
      setHost(window.location.host);
    }
  }, []);

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
          {isAuthenticated ? (
            <Button me={4} onClick={logout} suppressHydrationWarning>
              Logout
            </Button>
          ) : (
            <Link href={"/login"}>
              <Button me={4} suppressHydrationWarning>
                Login
              </Button>
            </Link>
          )}
          <ConnectWallet
            theme={darkTheme({
              colors: {
                primaryButtonBg: "#b51aff",
                primaryButtonText: "#FFFF",
              },
            })}
            btnTitle={t("common.connectWallet") ?? ""}
            modalTitle={t("common.supportWallet") ?? ""}
            modalSize={"wide"}
            welcomeScreen={{
              img: {
                src: `http://${host}/assets/logo/metaxot.png`,
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
