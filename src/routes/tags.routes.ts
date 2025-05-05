import { Router } from "express";
import { TagsController } from "../controller/tags.controller";
import authMiddleware from "../middlewares/auth";

const tagsRouter = Router();
const tagsController = new TagsController();

tagsRouter.post("/", [authMiddleware], tagsController.create);
tagsRouter.get("/", [authMiddleware], tagsController.getAll);
tagsRouter.get("/:id", [authMiddleware], tagsController.getById);
tagsRouter.put("/:id", [authMiddleware], tagsController.update);
tagsRouter.delete("/:id", [authMiddleware], tagsController.delete);

export default tagsRouter;
