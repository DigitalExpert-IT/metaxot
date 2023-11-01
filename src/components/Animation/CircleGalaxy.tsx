import { motion } from "framer-motion";
import { Box, BoxProps, keyframes } from "@chakra-ui/react";

const animationKeyframes = keyframes`
  0% { background-color:purple; z-index:2;}
  50% { transform: rotate(270deg) scaleX(0.7); background-color:teal; z-index:1; }
  100% { background-color:purple; z-index:2; }
`;

const animationKeyframes2 = keyframes`
  0% { background-color:teal; z-index:1 }
  50% { background-color:purple; z-index:2; }
  100% { background-color:teal; z-index:1}
`;

const animation = `${animationKeyframes} 10s ease-in-out infinite`;
const animation3 = `${animationKeyframes} 20s ease-in-out infinite`;
const animation2 = `${animationKeyframes2} 5s ease-in-out infinite`;

export const CircleGalaxy = (props?: BoxProps) => {
  const { ...rest } = props;
  return (
    <Box position={"absolute"} right="13vw" {...rest}>
      <Box
        w="352px"
        h="352px"
        bg="purple"
        rounded="full"
        filter={"blur(150px)"}
        position="relative"
        top="20rem"
        left="5rem"
        zIndex={2}
        animation={animation}
        as={motion.div}
      ></Box>
      <Box
        w="432px"
        h="432px"
        bg="teal"
        rounded="full"
        filter={"blur(150px)"}
        position="relative"
        zIndex={1}
        animation={animation2}
        as={motion.div}
      ></Box>
      <Box
        w="405px"
        h="405px"
        bg="purple"
        rounded="full"
        filter={"blur(150px)"}
        position="relative"
        bottom="12rem"
        left="-3rem"
        zIndex={2}
        animation={animation3}
        as={motion.div}
      ></Box>
    </Box>
  );
};
