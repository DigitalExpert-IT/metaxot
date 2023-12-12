import { PrismaClient } from "@prisma/client";
import { NextApiHandler } from "next";
import { findOne, remove, update } from "services";

const prisma = new PrismaClient();

const handler: NextApiHandler = async (req, resp) => {
  const querId = req.query.uuid?.toString();
  if (!querId) return;

  if (req.method === "GET") {
    findOne(prisma, querId, resp);
  }

  if (req.method === "PATCH") {
    update(prisma, querId, req.body, resp);
  }

  if (req.method === "DELETE") {
    remove(prisma, querId, resp);
  }
};
export default handler;
