export const DUMMY_JSON = [
  {
    uuid: "9b4a927e-849e-11ee-b962-0242ac120002",
    name: "land",
    latitude: "40.741895",
    longitude: "-73.989308",
    picture:
      "https://ik.imagekit.io/msxxxaegj/metashot/lot_medium.png?updatedAt=1699335228063",
    bg: "http://localhost:3000/assets/content/land/bg.png",
  },
  {
    uuid: "d917ab14-849e-11ee-b962-0242ac120002",
    name: "land",
    latitude: "40.741895",
    longitude: "-7223.989308",
    picture:
      "https://ik.imagekit.io/msxxxaegj/metashot/lot_medium.png?updatedAt=1699335228063",
    bg: "http://localhost:3000/assets/content/land/bg.png",
  },
  {
    uuid: "d917a47a-849e-11ee-b962-0242ac120002",
    name: "land",
    latitude: "40.741895",
    longitude: "-103.989308",
    picture:
      "https://ik.imagekit.io/msxxxaegj/metashot/lot_medium.png?updatedAt=1699335228063",
    bg: "http://localhost:3000/assets/content/land/bg.png",
  },
  {
    uuid: "550e8400-e29b-41d4-a716-446655450001",
    name: "land",
    latitude: "40.741895",
    longitude: "-83.989308",
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
    description: "",
    external_url: "",
    image: "",
    name: "",
    attributes: [],
  },
];
