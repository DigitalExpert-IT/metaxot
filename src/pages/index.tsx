import { Box, Container, Text } from "@chakra-ui/react";
import { Navbar } from "components";
import { Footer } from "components/Footer";
export default function Home() {
  return (
    <Box>
      <Navbar />
      <Container maxW={"container.xl"}>
        <Box minH={"100vh"} />
        <Footer />
      </Container>
    </Box>
  );
}
