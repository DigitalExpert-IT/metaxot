import { ERC721, Prisma, PrismaClient } from "@prisma/client";
import {
  DefaultArgs,
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
} from "@prisma/client/runtime/library";
import { NextApiRequest, NextApiResponse } from "next";

export const findAll = async (
  prisma: PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>,
  res: NextApiResponse
) => {
  try {
    const data = await prisma.eRC721.findMany({
      include: {
        attributes: {},
      },
    });
    res.status(200).json({
      status: 200,
      message: "success . . .",
      data: data,
    });
  } catch (e) {
    if (e instanceof PrismaClientUnknownRequestError) {
      res.status(500).json({
        status: e.cause,
        message: e.message,
      });
    }
    res.status(500).json({
      status: 500,
      message: e,
    });
  }
};

export const findOne = async (
  prisma: PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>,
  uuid: string,
  res: NextApiResponse
) => {
  try {
    const data = await prisma.eRC721.findUnique({
      where: {
        uuid: uuid,
      },
      include: {
        attributes: {},
      },
    });
    res.status(200).json({
      status: 200,
      message: "success . . . ",
      data: data,
    });
  } catch (e) {
    if (e instanceof PrismaClientUnknownRequestError) {
      res.status(500).json({
        status: e.cause,
        message: e.message,
      });
    }
    res.status(500).json({
      status: 500,
      message: e,
    });
  }
};

export const create = async (
  prisma: PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>,
  req: NextApiRequest,
  res: NextApiResponse
) => {
  try {
    const {
      animation_url,
      description,
      external_url,
      image,
      name,
      youtube_url,
    } = req.body as ERC721;
    const data = await prisma.eRC721.create({
      data: {
        description,
        external_url,
        image,
        name,
        animation_url,
        youtube_url,
        // @todo need to add attributes to
      },
    });
    res.status(200).json({
      status: 200,
      message: "success create nft",
      data: data,
    });
  } catch (e) {
    if (e instanceof PrismaClientUnknownRequestError) {
      res.status(500).json({
        status: e.cause,
        message: e.message,
      });
    }
    res.status(500).json({
      status: 500,
      message: e,
    });
  }
};

export const update = async (
  prisma: PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>,
  uuid: string,
  body: ERC721,
  res: NextApiResponse
) => {
  try {
    const {
      description,
      external_url,
      image,
      name,
      animation_url,
      youtube_url,
    } = body;
    const data = await prisma.eRC721.update({
      where: {
        uuid: uuid,
      },
      data: {
        description,
        external_url,
        image,
        name,
        animation_url,
        youtube_url,
        // @todo need update attibutes to
      },
    });
    res.status(200).json({
      status: 200,
      message: "success updated nft",
      data: data,
    });
  } catch (e) {
    if (e instanceof PrismaClientKnownRequestError) {
      res.status(500).json({
        status: e.code,
        message: e.message,
      });
    }
    res.status(500).json({
      status: 500,
      message: e,
    });
  }
};

export const remove = async (
  prisma: PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>,
  uuid: string,
  res: NextApiResponse
) => {
  try {
    const data = await prisma.eRC721.delete({
      where: {
        uuid: uuid,
      },
    });
    res.status(200).json({
      status: 200,
      message: "success deleted nft",
      data: data,
    });
  } catch (e: any) {
    if (e instanceof PrismaClientKnownRequestError) {
      res.status(500).json({
        status: e.code,
        message: e.message,
      });
    }
    res.status(500).json({
      status: 500,
      message: e,
    });
  }
};
