import { NextApiHandler, NextApiResponse } from "next";

const DUMMY_JSON = [
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
    uuid: "550e8400-e29b-41d4-a716-446655445000",
    name: "land",
    latitude: "40.741895",
    longitude: "-73.989308",
    picture:
      "https://ik.imagekit.io/msxxxaegj/metashot/lot_medium.png?updatedAt=1699335228063",
    bg: "http://localhost:3000/assets/content/land/bg.png",
  },
];

class Service {
  constructor(private data = DUMMY_JSON) {}
  findOne(uuid?: string) {
    if (!uuid) return;
    const getData = this.data.find(item => item.uuid === uuid);
    if (getData) return getData;
    else {
      return "undifined";
    }
  }
  findAll() {
    return DUMMY_JSON;
  }
}

const handler: NextApiHandler = async (req, resp) => {
  const service = new Service();
  return resp.status(200).json(service.findOne(req.query.uuid?.toString()));
};
export default handler;
