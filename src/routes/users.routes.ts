import { Router } from "express";
import authMiddleware from "../middlewares/auth";
import asyncHandler from "../middlewares/asynHandler";
import adminMiddleware from "../middlewares/admin";
import { UserController } from "../controller/users.controller";

const usersRouter = Router();
const userControler = new UserController();
usersRouter.put(
  "/edit",
  authMiddleware,
  asyncHandler(userControler.updateUser)
);
usersRouter.get(
  "/users",
  [adminMiddleware, authMiddleware],
  userControler.listAll
);
usersRouter.get(
  "/users/:id",
  [adminMiddleware, authMiddleware],
  userControler.findById
);
usersRouter.put(
  "/users/:id",
  [adminMiddleware, authMiddleware],
  userControler.changeRole
);
usersRouter.delete(
  "/users/:id",
  [adminMiddleware, authMiddleware],
  userControler.deleteUser
);

export default usersRouter;
