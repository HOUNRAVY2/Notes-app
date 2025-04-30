import { Role } from "@prisma/client";
import { UserRepository } from "../repositories/user.repository";
import { UpdatedUser } from "../schema/users";
import { hashSync } from "bcrypt";

export class UserService {
  private userRepository: UserRepository;
  constructor() {
    this.userRepository = new UserRepository();
  }
  public async findAll(skip: number) {
    return this.userRepository.findAll(skip);
  }
  public async findById(id: number) {
    return this.userRepository.findById(id);
  }
  public async updated(id: number, payload: UpdatedUser) {
    return this.userRepository.update(id, {
      name: payload.name,
      email: payload.email,
      password: hashSync(payload.password, 10),
    });
  }
  public async changeRole(id: number, role: Role) {
    return this.userRepository.changeRole(id, role);
  }
  public async delete(id: number) {
    return this.userRepository.delete(id);
  }
}
