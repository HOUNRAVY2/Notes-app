import prisma from "../utils/prisma";
import { UpdatedUser } from "../schema/users";
import { Role } from "@prisma/client";

export class UserRepository {
  public async findAll(skip: number) {
    return await prisma.user.findMany({
      skip,
      take: 5,
    });
  }
  public async findById(id: number) {
    return await prisma.user.findFirstOrThrow({
      where: { id },
    });
  }
  public async update(id: number, payload: UpdatedUser) {
    return await prisma.user.update({
      where: { id },
      data: {
        name: payload.name,
        email: payload.email,
        password: payload.password,
      },
    });
  }
  public async changeRole(id: number, role: Role) {
    return await prisma.user.update({
      where: { id },
      data: {
        role: role,
      },
    });
  }
  public async delete(id: number) {
    return await prisma.user.delete({
      where: { id },
    });
  }
}
