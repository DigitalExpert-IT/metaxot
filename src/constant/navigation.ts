import { BsInstagram, BsFacebook, BsTwitter } from "react-icons/bs";
import { IconType } from "react-icons/lib";

export interface INavChild {
  title: string;
  link: string;
}
export interface INavigation {
  name: string;
  href?: string;
  children?: INavChild[];
}

export interface ISocial {
  name: string;
  href: string;
  icon: IconType;
}

export const NAVIGATION: Array<INavigation> = [
  // {
  //   name: "home",
  //   href: "/",
  // },
  // {
  //   name: "landSale",
  //   href: "/land-sale",
  // },
  // {
  //   name: "roadMap",
  //   href: "/roadmap",
  // },
  // {
  //   name: "download",
  //   href: "/download",
  // },
  {
    name: "market",
    href: "/",
  },
  {
    name: "tradeCenter",
    href: "/trade-center",
  },
  {
    name: "profile",
    href: "/profile",
  },
];
