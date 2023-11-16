export const DUMMY_JSON = [
  {
    uuid: "550e8400-e29b-41d4-a716-446655440000",
    name: "land",
    latitude: "40.741895",
    longitude: "-73.989308",
    picture:
      "https://ik.imagekit.io/msxxxaegj/metashot/lot_medium.png?updatedAt=1699335228063",
    bg: "http://localhost:3000/assets/content/land/bg.png",
  },
  {
    uuid: "550e8400-e29b-41d4-a716-446655440001",
    name: "land",
    latitude: "40.741895",
    longitude: "-73.989308",
    picture:
      "https://ik.imagekit.io/msxxxaegj/metashot/lot_medium.png?updatedAt=1699335228063",
    bg: "http://localhost:3000/assets/content/land/bg.png",
  },
  {
    uuid: "550e8400-e29b-41d4-a716-446655450000",
    name: "land",
    latitude: "40.741895",
    longitude: "-73.989308",
    picture:
      "https://ik.imagekit.io/msxxxaegj/metashot/lot_medium.png?updatedAt=1699335228063",
    bg: "http://localhost:3000/assets/content/land/bg.png",
  },
  {
    uuid: "550e8400-e29b-41d4-a716-446655450001",
    name: "land",
    latitude: "40.741895",
    longitude: "-73.989308",
    picture:
      "https://ik.imagekit.io/msxxxaegj/metashot/lot_medium.png?updatedAt=1699335228063",
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
    description:
      "Friendly OpenSea Creature that enjoys long swims in the ocean.",
    external_url: "https://openseacreatures.io/3",
    image:
      "https://storage.googleapis.com/opensea-prod.appspot.com/puffs/3.png",
    name: "Dave Starbelly",
    attributes: [],
  },
];
