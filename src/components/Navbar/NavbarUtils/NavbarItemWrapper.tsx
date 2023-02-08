import { useContext } from "react";
import { ThemeContext } from "./NavbarMain";
import { Stack, StackProps } from "@chakra-ui/react";

export const NavbarItemWrapper: React.FC<StackProps> = props => {
  const styles = useContext(ThemeContext);
  return (
    <Stack {...styles.listWrapper} {...props}>
      {props.children}
    </Stack>
  );
};
