import { Router } from "express";
import authRouter from "./auth.routes";
import usersRouter from "./users.routes";
import noteRouter from "./note.routes";
import errorHandler from "../middlewares/error-handler";
import categoryRouter from "./category.routes";

const rootRouter: Router = Router();

rootRouter.use("/auth", authRouter);
rootRouter.use("/", usersRouter);
rootRouter.use("/category", categoryRouter);
rootRouter.use("/note", noteRouter);
rootRouter.use(errorHandler);
export default rootRouter;
