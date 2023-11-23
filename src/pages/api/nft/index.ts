import { NextApiHandler } from "next";
import { PrismaClient } from "@prisma/client";
import { create, findAll } from "services";

const prisma = new PrismaClient();

const handler: NextApiHandler = async (req, res) => {
  if (req.method === "GET") {
    await findAll(prisma, res);
  }

  if (req.method === "POST") {
    await create(prisma, req, res);
  }

  res.status(405).json({
    status: 405,
    message: "method not allowed",
  });
};

export default handler;
