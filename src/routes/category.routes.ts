import { Router } from "express";
import authMiddleware from "../middlewares/auth";
import { CategoryController } from "../controller/categories.controller";

const categoryRouter = Router();

const categoryController = new CategoryController();

categoryRouter.post("/", [authMiddleware], categoryController.CreateCategory);
categoryRouter.get("/", [authMiddleware], categoryController.FindAll);
categoryRouter.delete("/:id", [authMiddleware], categoryController.delete);
categoryRouter.get("/:id", [authMiddleware], categoryController.findId);
categoryRouter.post("/:id", [authMiddleware], categoryController.update);

export default categoryRouter;
