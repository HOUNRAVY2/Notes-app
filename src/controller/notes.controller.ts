import type { Request, Response, NextFunction } from "express";
import { NotesService } from "../services/notes.service";
import { CreateNoteSchema } from "../schema/notes";

export class NotesController {
  private notesService: NotesService;
  constructor() {
    this.notesService = new NotesService();
  }
  public createNote = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const validatedData = CreateNoteSchema.parse(req.body);
      const note = await this.notesService.createNote(
        validatedData,
        req.body.user.id
      );
      res.json({ data: note });
    } catch (error) {
      next(
        res.status(501).json({
          error: error,
        })
      );
    }
  };

  public getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const skip = req.query.skip ? Number(req.query.skip) : 0;
      const notes = await this.notesService.getAll(skip, req.body.user.id);
      res.json({ data: notes });
    } catch (err) {
      next(res.status(502).json({ err: err }));
    }
  };

  public getById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const notes = await this.notesService.findById(
        +req.params.id,
        req.body.user.id
      );
      res.json({ data: notes });
    } catch (err) {
      next(res.status(501).json({ err: err }));
    }
  };
  public delete = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const notes = await this.notesService.delete(
        +req.params.id,
        req.body.user.id
      );
      res.json({ data: notes });
    } catch (err) {
      next(res.status(404).json({ err: err }));
    }
  };

  public update = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const validatedData = CreateNoteSchema.parse(req.body);
      const notes = await this.notesService.update(
        +req.params.id,
        validatedData,
        req.body.user.id
      );
      res.json({ data: notes });
    } catch (err) {
      next(res.status(404).json({ err: err }));
    }
  };
}
