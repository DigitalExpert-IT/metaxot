import { ERC721, Prisma, PrismaClient } from "@prisma/client";
import { DefaultArgs } from "@prisma/client/runtime/library";
import { NextApiRequest, NextApiResponse } from "next";

class Service<Model> {
  private model: Model;

  constructor(
    public prisma: PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>,
    public nextApiRequest: NextApiRequest,
    public nextApiResponse: NextApiResponse,
    model: Model
  ) {
    this.model = model;
  }

  // ...
  async findOne(id: number) {
    try {
      this.prisma.eRC721;
      // Assuming the model has a findUnique method
      const result = await (
        this.model as Prisma.ERC721Delegate<DefaultArgs>
      ).findUnique({
        where: {
          id: id,
        },
      });
      return this.nextApiResponse.json(result);
    } catch (e: any) {
      return this.nextApiResponse.status(400).json({
        status: "error",
        message: [...e],
      });
    }
  }

  // Example method to access the model type
  getModelType(): Model {
    return this.model;
  }
}

export { Service };
