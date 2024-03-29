import {
  Text,
  Icon,
  Flex,
  Image,
  Stack,
  Drawer,
  Button,
  Collapse,
  DrawerBody,
  AspectRatio,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { INavigation } from "constant/navigation";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { ConnectWallet, darkTheme } from "@thirdweb-dev/react";

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  data: INavigation[];
  logo: string;
}

/**
 * Note...!!!
 * drawerMobileNav here only on drawer
 * if u expect navbar thunneeling to drawer u wrong
 * if u add button or something in navbar
 * make sure check the navbar drawer to..!! XD
 *
 */

export const DrawerMobileNav: React.FC<MobileDrawerProps> = props => {
  const { isOpen, onClose, data, logo } = props;
  const { isOpen: openChild, onToggle } = useDisclosure();
  const { t } = useTranslation();

  const [host, setHost] = useState("");
  useEffect(() => {
    if (window.location.host) {
      setHost(window.location.host);
    }
  }, []);

  return (
    <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent bgColor="gray.800">
        <DrawerCloseButton />
        <DrawerHeader>
          <AspectRatio w={10} h={10} ratio={1}>
            <Image src={logo} alt={logo} />
          </AspectRatio>
        </DrawerHeader>
        <Stack direction="row" w="full" justify="center" p="2" my="5">
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
                src: `http://${host}/assets/logo/metaxot.svg`,
                width: 150,
                height: 150,
              },
            }}
          />
        </Stack>
        <DrawerBody>
          <Stack spacing="5">
            {data.map((item, idx) => (
              <Stack key={idx} onClick={item.children && onToggle}>
                <Flex justify="space-between" align="center">
                  <Link href={item.href ?? "#"}>
                    <Text fontWeight="bold" textTransform="uppercase">
                      {t(`common.navigation.${item.name}`)}
                    </Text>
                  </Link>
                  {item.children && (
                    <Icon
                      as={ChevronDownIcon}
                      transition="all .25s ease-in-out"
                      transform={openChild ? "rotate(180deg)" : ""}
                      w={6}
                      h={6}
                    />
                  )}
                </Flex>
                <Collapse
                  in={openChild}
                  style={{ marginTop: "0!important" }}
                  animateOpacity
                >
                  <Stack
                    mt={2}
                    pl={4}
                    borderLeft={1}
                    borderStyle="solid"
                    borderColor="gray.700"
                    align={"start"}
                  >
                    {item.children &&
                      item.children.map((obj, id) => (
                        <Link key={id} href={obj.link}>
                          <Text>{t(`common.navigation.${obj.title}`)}</Text>
                        </Link>
                      ))}
                  </Stack>
                </Collapse>
              </Stack>
            ))}
          </Stack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
