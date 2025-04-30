import prisma from "../utils/prisma";
import { createNoteSachemaType } from "../schema/notes";

export class NotesRepository {
  public async createNote(payload: createNoteSachemaType, userId: number) {
    return await prisma.note.create({
      data: {
        userId: userId,
        title: payload.title,
        content: payload.content,
        categoryId: payload.categoryId,
      },
    });
  }
  public async findAll(skip: number, userId: number) {
    return await prisma.note.findMany({
      where: { userId },
      skip,
      take: 5,
    });
  }
  public async findById(id: number, userId: number) {
    return await prisma.note.findFirstOrThrow({
      where: { id, userId },
    });
  }
  public async updateNote(
    id: number,
    payload: createNoteSachemaType,
    userId: number
  ) {
    return await prisma.note.update({
      where: { id, userId },
      data: {
        title: payload.title,
        content: payload.content,
        categoryId: payload.categoryId,
      },
    });
  }
  public async deleteNote(id: number, userId: number) {
    return await prisma.note.delete({
      where: { id, userId },
    });
  }
}
