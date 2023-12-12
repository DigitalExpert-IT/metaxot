import { ERC721, PrismaClient, Prisma, Attribute } from "@prisma/client";
import { NextApiHandler } from "next";
const prisma = new PrismaClient();

const create = async (data: ERC721, attributes?: Attribute[]) => {
  const createNFT = await prisma.eRC721.create({
    data: data,
  });
  if (attributes) {
    const createAttibute = await prisma.attribute.create({
      data: {
        ...attributes,
        erc721: {
          connect: createNFT,
        },
      },
    });
  }
  return createNFT;
};

const handler: NextApiHandler = async (req, resp) => {
  if (req.method === "POST") {
    try {
      const data = await create(req.body);
      return resp.status(200).json({ message: "User data is valid", data });
    } catch (e) {
      if (e instanceof Prisma.PrismaClientValidationError) {
        return resp.status(400).json({
          status: 400,
          message: e.message.replace(/\n+/g, "").split(" ").slice(-3).join(" "),
          name: e.name,
        });
      } else
        return resp.status(500).json({
          status: 500,
          message: [e],
        });
    }
  } else {
    return resp.status(405).json({
      status: 405,
      message: "Method Not Allowed",
    });
  }
};
export default handler;
