import prisma from "../utils/prisma";
import { createCategorySchema } from "../schema/categories";

export class CategoriesRepository {
  public async CreateCategory(payload: createCategorySchema, userId: number) {
    return await prisma.category.create({
      data: {
        name: payload.name,
        userId: userId,
      },
    });
  }
  public async findAll(skip: number, id: number) {
    return await prisma.category.findMany({
      where: { userId: id },
      skip,
      take: 5,
    });
  }

  public async findById(id: number, userId: number) {
    return await prisma.category.findFirstOrThrow({
      where: { id, userId: userId },
    });
  }
  public async delete(id: number, userId: number) {
    return await prisma.category.delete({
      where: { id, userId: userId },
    });
  }

  public async update(
    id: number,
    payload: createCategorySchema,
    userId: number
  ) {
    return await prisma.category.update({
      where: { id, userId: userId },
      data: {
        name: payload.name,
      },
    });
  }
}
