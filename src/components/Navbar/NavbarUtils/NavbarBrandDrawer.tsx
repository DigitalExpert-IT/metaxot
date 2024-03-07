import {
  Image,
  Stack,
  IconButton,
  StackProps,
  AspectRatio,
} from "@chakra-ui/react";
import Link from "next/link";
import { useContext } from "react";
import { INavigation } from "constant";
import { ThemeContext } from "./NavbarMain";
import { GiHamburgerMenu } from "react-icons/gi";
import { DrawerMobileNav } from "./DrawerMobileNav";

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
        logo="/assets/logo/metaxotWhite.png"
      />
      <IconButton
        {...styles.drawerBurger}
        icon={<GiHamburgerMenu />}
        onClick={isOpen ? onClose : onOpen}
      />
      <Link href="/">
        <AspectRatio w="80px">
          <Image src={"/assets/logo/metaxotWhite.png"} alt="logo-image" />
        </AspectRatio>
      </Link>
    </Stack>
  );
};
