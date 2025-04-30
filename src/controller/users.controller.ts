import type { Request, Response, NextFunction } from "express";
import { UserService } from "../services/user.service";
import { NotFoundException } from "../exceptions/not-found";
import { ErrorCode } from "../exceptions/root";
import { RoleSchema, UpdateUserSchema } from "../schema/users";

export class UserController {
  private userService: UserService;
  constructor() {
    this.userService = new UserService();
  }
  public listAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const skip = req.query.skip ? Number(req.query.skip) : 0;
      const user = await this.userService.findAll(skip);
      res.json({ date: user });
    } catch (err) {
      next(err);
    }
  };
  public findById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = await this.userService.findById(+req.params.id);
      res.json({ data: user });
    } catch (err) {
      next(new NotFoundException("User not found", ErrorCode.USER_NOT_FOUND));
    }
  };
  public updateUser = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const validatedData = UpdateUserSchema.parse(req.body);
      const user = req.user;
      if (!user) {
        return res.status(401).json({ error: "Unauthorized" });
      }
      const users = await this.userService.updated(user.id, validatedData);
      res.json({ data: users });
    } catch (err) {
      next(new NotFoundException("User not found", ErrorCode.USER_NOT_FOUND));
    }
  };

  public changeRole = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const user = await this.userService.changeRole(
        +req.params.id,
        req.body.role
      );
      res.json({ message: "Successfully for change role", user });
    } catch (err) {
      next(
        res.status(404).json({
          error: "Something went wrongs",
        })
      );
    }
  };
  public deleteUser = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const user = await this.userService.delete(+req.params.id);
      res.json({ data: user });
    } catch (error) {
      next(error);
    }
  };
}
