import { NextApiHandler } from "next";

const DUMMY_JSON = {
  "550e8400-e29b-41d4-a716-446655440000": {
    name: "land",
    latitude: "40.741895",
    longitude: "-73.989308",
    picture: "http://localhost:3000/assets/content/land/building.png",
    bg: "http://localhost:3000/assets/content/land/bg.png",
  },
  "550e8400-e29b-41d4-a716-446655445000": {
    name: "land",
    latitude: "40.741895",
    longitude: "-73.989308",
    picture: "http://localhost:3000/assets/content/land/building.png",
    bg: "http://localhost:3000/assets/content/land/bg.png",
  },
};

const handler: NextApiHandler = async (req, resp) => {
  return resp
    .status(200)
    .json(DUMMY_JSON[req.query.uuid as "550e8400-e29b-41d4-a716-446655440000"]);
};
export default handler;
