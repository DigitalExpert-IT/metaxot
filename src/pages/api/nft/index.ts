import { PrismaClient } from "@prisma/client";
import { NextApiHandler } from "next";

const prisma = new PrismaClient();

const handler: NextApiHandler = async (req, res) => {
  try {
    const allNFTs = await prisma.eRC721.findMany({
      include: {
        attributes: {},
      },
    });
    res.status(200).json(allNFTs);
  } catch (e: any) {
    res.status(500).json({
      errorCode: e.errorCode,
      message: e.message,
    });
  }
};

export default handler;
