import { TagsRepository } from "../repositories/tags.repository";
import { tagsSchemaType } from "../schema/tags";

export class TagsService {
  private tagsRepository: TagsRepository;
  constructor() {
    this.tagsRepository = new TagsRepository();
  }

  public async create(payload: tagsSchemaType, userId: number) {
    return this.tagsRepository.create(
      {
        name: payload.name,
      },
      userId
    );
  }
  public async getAll(userId: number) {
    return this.tagsRepository.getAll(userId);
  }

  public async getById(id: number, userId: number) {
    return await this.tagsRepository.getById(id, userId);
  }

  public async update(id: number, payload: tagsSchemaType, userId: number) {
    return await this.tagsRepository.update(
      id,
      {
        name: payload.name,
      },
      userId
    );
  }

  public async delete(id: number, userId: number) {
    return await this.tagsRepository.datele(id, userId);
  }
}
