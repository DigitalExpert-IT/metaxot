import { PrismaClient } from "@prisma/client";
import { DUMMY_JSON } from "constant/dummyResAPI";
import { NextApiHandler } from "next";

const prisma = new PrismaClient();

const handler: NextApiHandler = async (req, resp) => {
  if (req.method === "POST") {
    try {
      const promises = DUMMY_JSON.forEach(async e => {
        await prisma.eRC721.create({
          data: {
            name: e.name,
            description: "land description",
            external_url: e.picture,
            image: e.picture,
            uuid: e.uuid,
            attributes: {
              create: [
                {
                  trait_type: "latitude",
                  value: e.latitude,
                },
                {
                  trait_type: "longitude",
                  value: e.longitude,
                },
              ],
            },
          },
        });
      });
      resp.status(200).json({
        status: 200,
        message: "succes seed nft",
      });
    } catch (e: any) {
      resp.status(500).json({
        status: 500,
        message: [e],
      });
    }
  }
  resp.status(405).json({
    status: 405,
    message: "Method Not Allowed",
  });
};
export default handler;
