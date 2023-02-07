import { Box, BoxProps, Button, Input, Text } from "@chakra-ui/react";
import React from "react";

export const Footer = () => {
  return (
    <Box>
      <Text>METAXOT</Text>
      <Text>Drop your email for further information.</Text>
      <Input type={"email"} />
      <Button colorScheme={"metaxot"}>send</Button>
    </Box>
  );
};
