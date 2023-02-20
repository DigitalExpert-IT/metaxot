import { Box, Flex, FlexProps, Stack, Text } from "@chakra-ui/react";

type TProps = FlexProps & {
  name: string;
  title: string;
  description: string;
}

export const CardCrew = (props: TProps) => {
  const { name, title, description, ...rest } = props
  return (
    <Flex
      minH={"xs"}
      flexFlow={{ base: "wrap", sm: "row" }}
      rounded={"3xl"}
      overflow={"hidden"}
      maxW={{ base: "full", md: "lg", lg: "full" }}
      {...rest}
    >
      <Box
        w={{ base: "full", sm: "xs" }}
        minH={{ base: "xs" }}
        overflow={"hidden"}
        bgGradient="linear(to-tl, yellowMetaxot.200, yellowMetaxot.500)"
        position={"relative"}
      >
        <Stack
          position={"absolute"}
          top={0}
          bottom={0}
          right={0}
          left={{ base: -100, sm: -160 }}
          justifyContent={"center"}
          justify={"center"}
        >
          <Box
            h={{ base: "36", lg: "52" }}
            w={"xl"}
            bg={"whiteAlpha.500"}
            sx={{ transform: "rotate(-45deg)" }}
          ></Box>
        </Stack>
      </Box>
      <Box
        w={"full"}
        p={"10"}
        bg={"white"}
        textColor={"black"}
        fontWeight={"bold"}
        fontSize={{ lg: "3xl", base: "xl" }}
      >
        <Text>{name}</Text>
        <Text textColor={"gray.500"}>{title}</Text>
        <Text fontSize={"sm"} mt={"8"}>
          {description}
        </Text>
      </Box>
    </Flex>
  );
};
