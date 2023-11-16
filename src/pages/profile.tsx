/* eslint-disable jsx-a11y/alt-text */
import {
  AspectRatio,
  Box,
  Heading,
  Image,
  Stack,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { LayoutMain } from "components";
import {
  useAddress,
  useContract,
  useOwnedNFTs,
  useBalance,
  useNFTBalance,
  useWallet,
} from "@thirdweb-dev/react";
import { MNFT, XPC_CONTRACT } from "constant/address";
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
