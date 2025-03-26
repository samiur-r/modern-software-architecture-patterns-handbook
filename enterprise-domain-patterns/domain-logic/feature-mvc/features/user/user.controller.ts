import { Request, Response } from "express";
import { CreateUserSchema } from "./user.schema";
import * as userService from "./user.service";

export const registerUserController = async (req: Request, res: Response) => {
  const parsed = CreateUserSchema.safeParse(req.body);

  if (!parsed.success) {
    return res.status(400).json({ error: parsed.error.format() });
  }

  try {
    const user = await userService.registerUser(parsed.data);
    return res.status(201).json(user);
  } catch (err: any) {
    return res.status(400).json({ error: err.message });
  }
};

export const getUserByEmailController = async (req: Request, res: Response) => {
  try {
    const user = await userService.getUserByEmail(req.params.email);
    return res.json(user);
  } catch (err: any) {
    return res.status(404).json({ error: err.message });
  }
};
