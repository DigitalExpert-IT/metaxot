import {
  Image,
  Stack,
  IconButton,
  StackProps,
  AspectRatio,
} from "@chakra-ui/react";
import Link from "next/link";
import { INavigation } from "constant";
import { GiHamburgerMenu } from "react-icons/gi";
import { DrawerMobileNav } from "components/Drawer";
import { useContext } from "react";
import { ThemeContext } from "./NavbarMain";

interface NavbarBrandDrawerProps extends StackProps {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
  data: INavigation[];
}

export const NavbarBrandDrawer: React.FC<NavbarBrandDrawerProps> = props => {
  const { isOpen, onClose, onOpen, data, ...rest } = props;
  const styles = useContext(ThemeContext);
  return (
    <Stack {...styles.drawer} {...rest}>
      <DrawerMobileNav
        data={props.data}
        isOpen={props.isOpen}
        onClose={props.onClose}
        logo="/assets/logo/metaxot.svg"
      />
      <IconButton
        fontSize="xl"
        variant="ghost"
        aria-label="open-menu"
        icon={<GiHamburgerMenu />}
        display={{ base: "flex", md: "flex", lg: "none" }}
        onClick={isOpen ? onClose : onOpen}
      />
      <Link href="/">
        <AspectRatio w="120px" h="20px" ratio={1}>
          <Image src={"/assets/logo/metaxot.svg"} alt="logo-image" />
        </AspectRatio>
      </Link>
    </Stack>
  );
};
