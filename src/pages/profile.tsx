import { Stack } from "@chakra-ui/react";
import { LayoutMain } from "components";
import { Balance, NFTs, } from "components/pages/Profile";
import { CircleGalaxy } from "components";

const Profile = () => {
  return (
    <LayoutMain title="Profile">
      <Stack position={"relative"} maxW={"xs"} ml={"60%"} zIndex={"hide"}>
        <CircleGalaxy top={0} mt={"-30rem"} />
      </Stack>
      <Balance />
      <NFTs />
    </LayoutMain>
  );
};
export default Profile;
