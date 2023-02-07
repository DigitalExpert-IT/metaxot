import { Stack, StackProps } from "@chakra-ui/react";

export const NavbarItemWrapper: React.FC<StackProps> = props => {
  return (
    <Stack
      flex={3}
      align="center"
      fontSize="20px"
      direction="row"
      fontWeight="400"
      justify="center"
      fontFamily="angkor"
      textAlign={"center"}
      textTransform="capitalize"
      display={{ base: "none", md: "none", lg: "flex" }}
      {...props}
    >
      {props.children}
    </Stack>
  );
};
