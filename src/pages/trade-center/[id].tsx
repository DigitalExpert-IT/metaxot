import { BigNumber, ethers } from "ethers";
import Detail from "./Detail";
export interface detail {
  bg: string;
  category: BigNumber;
  isRentalAble: true;
  isSold: boolean;
  latitude: string;
  longitude: string;
  name: string;
  picture: string;
  price: BigNumber;
  rentId: BigNumber;
  uuid: string;
  owner: string;
}

export default Detail;
