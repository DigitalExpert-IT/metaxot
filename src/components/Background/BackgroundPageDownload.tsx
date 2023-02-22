import { Box, Image, Stack } from "@chakra-ui/react";

export const BackgroundPageDownload = () => {
  return (
    <Box position={"absolute"} top={0} left={0} right={0} zIndex={"hide"}>
      <Image
        objectFit={"cover"}
        w={"full"}
        mt={{ "3xl": "-14" }}
        src={"/assets/images/bgDownload.png"}
        alt={"Mataxot"}
        minH={"xl"}
        maxH={"2xl"}
        style={{
          WebkitMaskImage: "linear-gradient(black, transparent)",
        }}
      />
    </Box>
  );
};
