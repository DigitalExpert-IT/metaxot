import { PrismaClient } from "@prisma/client";
import { NextApiHandler } from "next";

const prisma = new PrismaClient();

const handler: NextApiHandler = async (req, resp) => {
  const querId = req.query.uuid?.toString();
  try {
    const data = await prisma.eRC721.findFirst({
      where: {
        uuid: querId,
      },
      include: {
        attributes: {},
      },
    });
    if (data) {
      return resp.status(200).json(data);
    }
    resp.status(400).json({ message: "undifined" });
  } catch (e: any) {
    return resp.status(500).json({ ...e });
  }
};
export default handler;
