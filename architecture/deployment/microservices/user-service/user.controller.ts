import * as Service from './user.service';
import { Request, Response } from 'express';

export const register = async (req: Request, res: Response) => {
  const { name, email } = req.body;
  const result = await Service.registerUser(name, email);
  res.json(result);
};

export const getById = async (req: Request, res: Response) => {
  const user = await Service.findUser(req.params.id);
  res.json(user);
};