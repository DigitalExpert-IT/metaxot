import { useEffect, useRef, useState } from "react";
import {
  Box,
  Container,
  Text,
  FormControl,
  Input,
  FormLabel,
  Button,
  Image,
} from "@chakra-ui/react";
import { FramerBox } from "components/Animation";
import { SubmitHandler, useForm } from "react-hook-form";
import useAuth, { ILoginForm } from "hooks/metaxotGame/useAuth";

const LoginPage = () => {
  const submitRef = useRef<any>(null);
  const { authenticate, isLoading } = useAuth();
  const { register, handleSubmit } = useForm<ILoginForm>();
  const onSubmit: SubmitHandler<ILoginForm> = (data) => {
    authenticate(data);
  };
  const [host, setHost] = useState("");

  useEffect(() => {
    if (window.location.host) {
      setHost(window.location.host);
    }
  }, []);

  return (
    <Box
      backgroundImage={
        "https://ik.imagekit.io/msxxxaegj/metashot/metaxot-lobby.jpg?updatedAt=1706614894307"
      }
      backgroundPosition={"bottom center"}
      color={"whiteAlpha.700"}
      backgroundSize={{ base: "cover", lg: "100%" }}
    >
      <Box
        position={"fixed"}
        top={0}
        left={0}
        width={"full"}
        height={"full"}
        backgroundColor={"#000"}
        opacity={0.6}
        zIndex={1}
      ></Box>
      <Container
        position={"relative"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        maxW={"container.sm"}
        minH={"100vh"}
        zIndex={2}
        overflow={"hidden"}
      >
        <FramerBox
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          // @ts-ignore no problem in operation, although type error appears.
          transition={{
            duration: 3,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
          }}
          position={"relative"}
          minW={400}
          p={8}
          pb={16}
          padding={"8px 8px"}
          backgroundImage={"linear-gradient(-45deg, #00ffff, #5500aa, #0099ff)"}
          boxShadow={"0px 0px 20px #5500ff"}
          borderRadius={"lg"}
          backgroundSize={"400% 400%"}
        >
          <Box
            position={"absolute"}
            width={"600px"}
            height={"300px"}
            left={"-25%"}
            marginX={"auto"}
            bottom={"-248px"}
            transform={"perspective(10px) rotateX(2deg)"}
            backgroundImage={
              "linear-gradient(180deg, #5500aa, transparent, transparent)"
            }
            pointerEvents={"none"}
            zIndex={1024}
          ></Box>
          <Box
            p={8}
            pt={8}
            pb={12}
            backgroundImage={
              "linear-gradient(90deg, #171923, #212733, #171923)"
            }
            border={"none"}
            borderRadius={"lg"}
            boxShadow={"inset 0 0 10px black"}
          >
            <Image
              width={16}
              src={`http://${host}/assets/logo/metaxot.png`}
              alt="logo"
            />
            <Box textAlign={"center"} mb={4}>
              <Text fontSize={"4xl"}>Login</Text>
              <Text>with game account</Text>
            </Box>

            <Box>
              <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl>
                  <FormLabel>Email</FormLabel>
                  <Input
                    placeholder="Email"
                    boxShadow={"inset 0 0 10px #55009a"}
                    {...register("email")}
                  />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>Password</FormLabel>
                  <Input
                    type="password"
                    placeholder="Password"
                    boxShadow={"inset 0 0 10px #55009a"}
                    {...register("password")}
                  />
                </FormControl>

                <Button
                  width={"full"}
                  ref={submitRef}
                  type="submit"
                  colorScheme="blue"
                  isLoading={isLoading}
                  mt={8}
                >
                  Login
                </Button>
              </form>
            </Box>
          </Box>
        </FramerBox>
      </Container>
    </Box>
  );
};

export default LoginPage;
