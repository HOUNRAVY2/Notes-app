import { CategoriesRepository } from "../repositories/categories.repository";
import { createCategorySchema } from "../schema/categories";

export class CategoryService {
  private categoryService: CategoriesRepository;
  constructor() {
    this.categoryService = new CategoriesRepository();
  }
  public async CreateCategory(payload: createCategorySchema, userId: number) {
    return this.categoryService.CreateCategory(
      {
        name: payload.name,
      },
      userId
    );
  }
  public async findAll(skip: number, userId: number) {
    return await this.categoryService.findAll(skip, userId);
  }
  public async findId(id: number, userId: number) {
    return await this.categoryService.findById(id, userId);
  }
  public async delete(id: number, userId: number) {
    return await this.categoryService.delete(id, userId);
  }
  public async update(
    id: number,
    payload: createCategorySchema,
    userId: number
  ) {
    return await this.categoryService.update(
      id,
      {
        name: payload.name,
      },
      userId
    );
  }
}
