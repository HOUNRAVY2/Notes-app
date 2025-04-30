import { Router } from "express";
import authMiddleware from "../middlewares/auth";
import { NotesController } from "../controller/notes.controller";

const noteRouter = Router();
const noteController = new NotesController();

noteRouter.post("/", [authMiddleware], noteController.createNote);
noteRouter.get("/", [authMiddleware], noteController.getAll);
noteRouter.get("/:id", [authMiddleware], noteController.getById);
noteRouter.delete("/:id", [authMiddleware], noteController.delete);
noteRouter.post("/:id", [authMiddleware], noteController.update);

export default noteRouter;
