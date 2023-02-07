import { Box, Container, Text } from "@chakra-ui/react";
import { Footer } from "components/Footer";
export default function Home() {
  return (
    <Box>
      <Container maxW={"container.xl"}>
        <Box minH={"100vh"} />
        <Footer />
      </Container>
    </Box>
  );
}
