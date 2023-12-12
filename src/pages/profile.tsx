import { LayoutMain } from "components";
import { Balance, NFTs } from "components/pages/Profile";

const Profile = () => {
  return (
    <LayoutMain title="Profile">
      <Balance />
      <NFTs />
    </LayoutMain>
  );
};
export default Profile;
