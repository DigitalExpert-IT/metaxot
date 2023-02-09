import { INavigation } from "./navigation";

export type FooterNavigation = {
  label: string;
  children?: INavigation[];
};
export const FOOTER_NAVIGATION: Array<FooterNavigation> = [
  {
    label: "LAND",
    children: [
      { name: "Buy", href: "/buy" },
      { name: "Sell", href: "/sell" },
    ],
  },
  {
    label: "ROADMAP",
    children: [
      { name: "PDF", href: "/pdf" },
      { name: "Share", href: "/share" },
    ],
  },
  {
    label: "DOWNLOAD",
    children: [
      { name: "For PC", href: "/download-pc" },
      { name: "For Android", href: "/download-android" },
      { name: "For IOS", href: "/download-ios" },
      { name: "For VR", href: "/download-vr" },
    ],
  },
  {
    label: "EXTRAS",
    children: [
      { name: "About Us", href: "/about-us" },
      { name: "Private", href: "/privacy" },
      { name: "Terms", href: "/terms" },
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
