import { INavigation } from "./navigation";

export type FooterNavigation = {
  label: string;
  children?: INavigation[];
};
export const FOOTER_NAVIGATION: Array<FooterNavigation> = [
  {
    label: "LAND",
    children: [
      { name: "Buy", href: "#" },
      { name: "Sell", href: "#" },
    ],
  },
  {
    label: "ROADMAP",
    children: [
      { name: "PDF", href: "#" },
      { name: "Share", href: "#" },
    ],
  },
  {
    label: "DOWNLOAD",
    children: [
      { name: "For PC", href: "#" },
      { name: "For Android", href: "#" },
      { name: "For IOS", href: "#" },
      { name: "For VR", href: "#" },
    ],
  },
  {
    label: "EXTRAS",
    children: [
      { name: "About Us", href: "#" },
      { name: "Private", href: "#" },
      { name: "Terms", href: "#" },
    ],
  },
];

export const SOSMED_FOOTER = [
  { href: "https://twitter.com", icon: "/assets/icon/twitter.png" },
  { href: "https://opensea.io", icon: "/assets/icon/opensea.png" },
  { href: "https://youtube.com", icon: "/assets/icon/youtube.png" },
  { href: "https://instagram.com", icon: "/assets/icon/instagram.png" },
  { href: "https://discord.com/", icon: "/assets/icon/discord.png" },
];
