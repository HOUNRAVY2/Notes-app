import { Request, Response, NextFunction } from "express";
import { CreateCategorySchema } from "../schema/categories";
import { CategoryService } from "../services/categories.service";

export class CategoryController {
  private categoryController: CategoryService;
  constructor() {
    this.categoryController = new CategoryService();
  }

  public CreateCategory = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      // Middleware (user make req)
      // Middleware authenticate user
      const validatedData = CreateCategorySchema.parse(req.body);
      const category = await this.categoryController.CreateCategory(
        validatedData,
        req.body.user.id
      );
      res.json({ data: category });
    } catch (err) {
      console.log(err);
      next(res.status(501).json({ err: err }));
    }
  };
  public FindAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const skip = req.query.skip ? Number(req.query.skip) : 0;
      const category = await this.categoryController.findAll(
        skip,
        req.body.user.id
      );
      res.json({ data: category });
    } catch (err) {
      next(res.status(501).json({ err: err }));
    }
  };

  public findId = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = +req.params.id;
      const category = await this.categoryController.findId(
        id,
        req.body.user.id
      );
      res.json({ data: category });
    } catch (err) {
      next(res.status(404).json({ err: err }));
    }
  };

  public delete = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const category = await this.categoryController.delete(
        +req.params.id,
        req.body.user.id
      );
      res.json({ data: category });
    } catch (err) {
      next(res.status(501).json({ err: err }));
    }
  };

  public update = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const validatedData = CreateCategorySchema.parse(req.body);
      const category = await this.categoryController.update(
        +req.params.id,
        validatedData,
        req.body.user.id
      );
      res.json({ data: category });
    } catch (err) {
      next(res.status(404).json({ err: "Category not found." }));
    }
  };
}
