import { Box, BoxProps, Container } from "@chakra-ui/react";
import { Navbar } from "components";
import React from "react";

interface LayoutMainProps extends BoxProps {}

export const LayoutMain: React.FC<LayoutMainProps> = props => {
  return (
    <Box>
      <Navbar />
      <Container pt={{ base: "20", md: "40" }} maxW="container.xl">
        {props.children}
      </Container>
    </Box>
  );
};
