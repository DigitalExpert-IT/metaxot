import { useContext } from "react";
import { ThemeContext } from "./NavbarMain";
import { Container, ContainerProps, Flex } from "@chakra-ui/react";

interface NavbarBodyProps extends ContainerProps {}

export const NavbarBody: React.FC<NavbarBodyProps> = props => {
  const styles = useContext(ThemeContext);
  return (
    <Container maxW="container.xl">
      <Flex {...styles.body}>{props.children}</Flex>
    </Container>
  );
};
