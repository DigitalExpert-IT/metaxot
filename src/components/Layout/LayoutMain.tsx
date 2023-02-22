import React from "react";
import { Navbar } from "components";
import { Footer } from "components/Footer";
import { Box, BoxProps, Container } from "@chakra-ui/react";
import Head from "next/head";

interface LayoutMainProps extends BoxProps {
  title?: string;
}

export const LayoutMain: React.FC<LayoutMainProps> = props => {
  const { title } = props;
  return (
    <Box>
      {title && (
        <Head>
          <title>{title} - Metaxot </title>
        </Head>
      )}
      <Navbar />
      <Container pt={{ base: "20", md: "40" }} maxW="container.xl">
        {props.children}
      </Container>
      <Footer />
    </Box>
  );
};
