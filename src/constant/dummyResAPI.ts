export const DUMMY_JSON = [
  {
    uuid: "550e8400-e29b-41d4-a716-446655440000",
    name: "Land Small",
    latitude: "40.741895",
    longitude: "-73.989308",
    picture:
      "https://ik.imagekit.io/msxxxaegj/metashot/lot_medium.png?updatedAt=1699335228063",
    bg: "http://localhost:3000/assets/content/land/bg.png",
  },
  {
    uuid: "550e8400-e29b-41d4-a716-446655440001",
    name: "Land Medium",
    latitude: "40.741895",
    longitude: "-7223.989308",
    picture:
      "https://ik.imagekit.io/msxxxaegj/metashot/lot_medium.png?updatedAt=1699335228063",
    bg: "http://localhost:3000/assets/content/land/bg.png",
  },
  {
    uuid: "b7662a69-11c6-4071-8c5d-d0b8b2a1659b",
    name: "Land Large",
    latitude: "60.741895",
    longitude: "-43.989308",
    picture:
      "https://ik.imagekit.io/msxxxaegj/metashot/building_nft.png?updatedAt=1700624721435",
    bg: "http://localhost:3000/assets/content/land/bg.png",
  },
  {
    uuid: "550e8400-e29b-41d4-a716-446655450000",
    name: "Building A",
    latitude: "40.741895",
    longitude: "-103.989308",
    picture:
      "https://ik.imagekit.io/msxxxaegj/metashot/building_nft.png?updatedAt=1700624721435",
    bg: "http://localhost:3000/assets/content/land/bg.png",
  },
  {
    uuid: "550e8400-e29b-41d4-a716-446655450001",
    name: "Building B",
    latitude: "40.741895",
    longitude: "-83.989308",
    picture:
      "https://ik.imagekit.io/msxxxaegj/metashot/building_nft.png?updatedAt=1700624721435",
    bg: "http://localhost:3000/assets/content/land/bg.png",
  },
];

export const ZERO_ADDRESS = "0x0000000000000000000000000000000000000000";

interface TraitTypeOption {
  display_type?: string;
  trait_type?: string;
  value?: number | string;
}

interface StandartERC721_JSON {
  description: string;
  external_url: string;
  image: string;
  name: string;
  attributes?: TraitTypeOption[] | undefined;
}

export const DUMMY_STANDART_JSON: StandartERC721_JSON[] = [
  {
    description: "",
    external_url: "",
    image: "",
    name: "",
    attributes: [],
  },
];
