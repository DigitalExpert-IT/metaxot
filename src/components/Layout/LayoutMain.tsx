import React from "react";
import { Navbar } from "components";
import { Footer } from "components/Footer";
import { Box, BoxProps, Container } from "@chakra-ui/react";

export const LayoutMain: React.FC<BoxProps> = props => {
  return (
    <Box>
      <Navbar />
      <Container pt={{ base: "20", md: "40" }} maxW="container.xl">
        {props.children}
      </Container>
      <Footer />
    </Box>
  );
};
