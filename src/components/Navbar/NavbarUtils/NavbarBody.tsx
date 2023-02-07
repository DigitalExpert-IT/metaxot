import { Container, ContainerProps, Flex } from "@chakra-ui/react";
import React from "react";

interface NavbarBodyProps extends ContainerProps {}

export const NavbarBody: React.FC<NavbarBodyProps> = props => {
  return (
    <Container maxW="container.xl">
      <Flex alignItems="center" justify="space-around">
        {props.children}
      </Flex>
    </Container>
  );
};
