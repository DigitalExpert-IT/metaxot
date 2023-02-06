import { Box, Image, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import React from "react";

export const Navbar = () => {
  return (
    <Box bg="orange">
      <Image src="/assets/icon/facebook.png" alt="logo"></Image>
      <UnorderedList>
        <ListItem>Lorem ipsum dolor sit amet</ListItem>
        <ListItem>Consectetur adipiscing elit</ListItem>
        <ListItem>Integer molestie lorem at massa</ListItem>
        <ListItem>Facilisis in pretium nisl aliquet</ListItem>
      </UnorderedList>
    </Box>
  );
};
