import prisma from "../utils/prisma";
import { tagsSchemaType } from "../schema/tags";

export class TagsRepository {
  public async create(payload: tagsSchemaType, userId: number) {
    return await prisma.tag.create({
      data: {
        name: payload.name,
        userId: userId,
      },
    });
  }
  public async getAll(userId: number) {
    return await prisma.tag.findMany({
      where: { userId },
    });
  }
  public async getById(id: number, userId: number) {
    return await prisma.tag.findFirstOrThrow({
      where: { id, userId },
    });
  }
  public async update(id: number, payload: tagsSchemaType, userId: number) {
    return await prisma.tag.update({
      where: { id, userId },
      data: {
        name: payload.name,
      },
    });
  }

  public async datele(id: number, userId: number) {
    return await prisma.tag.delete({
      where: { id, userId },
    });
  }
}
