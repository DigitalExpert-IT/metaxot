import { Image, Stack } from "@chakra-ui/react"

export const BackgroundExploreLand = () => {
  return (
    <Stack>
      <Image
        w={"full"}
        src={"/assets/images/ExploreLand.png"}
        alt={"ExploreLand"}
        display={{ base: "none", lg: "block" }}
      />
      <Image
        w={"full"}
        src={"/assets/images/ExploreLandMobile.png"}
        alt={"ExploreLand"}
        display={{ base: "block", lg: "none" }}
      />
    </Stack>
  )
}
