import { TagsService } from "../services/tags.service";
import { TagsSchema } from "../schema/tags";
import { Request, Response, NextFunction } from "express";

export class TagsController {
  private tagsService: TagsService;
  constructor() {
    this.tagsService = new TagsService();
  }

  public create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const validatedData = TagsSchema.parse(req.body);
      const tags = await this.tagsService.create(
        validatedData,
        req.body.user.id
      );
      res.json({ data: tags });
    } catch (err) {
      next(res.status(501).json({ err: err }));
    }
  };

  public getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const tags = await this.tagsService.getAll(req.body.user.id);
      if (tags.length <= 0) {
        return next(res.status(404).json({ message: "Data not found!" }));
      }
      res.json({ data: tags });
    } catch (err) {
      next(
        res.status(502).json({
          err: err,
          message: "somthing went wrong.",
        })
      );
    }
  };

  public getById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const tags = await this.tagsService.getById(
        +req.params.id,
        req.body.user.id
      );
      res.json({ data: tags });
    } catch (err) {
      next(
        res.status(404).json({
          err: err,
          message: "Tags Not Found",
        })
      );
    }
  };

  public update = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const validatedData = TagsSchema.parse(req.body);
      const tags = await this.tagsService.update(
        +req.params.id,
        validatedData,
        req.body.user.id
      );
      res.json({ data: tags });
    } catch (err) {
      next(
        res.status(502).json({
          message: " somthing went wrong!",
          err: err,
        })
      );
    }
  };

  public delete = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const tags = await this.tagsService.delete(
        +req.params.id,
        req.body.user.id
      );
      res.json({ data: tags });
    } catch (err) {
      next(
        res.status(504).json({
          message: "Somthing went wrong!",
          err: err,
        })
      );
    }
  };
}
