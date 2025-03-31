import * as Service from './order.service';
import { Request, Response } from 'express';

export const place = async (req: Request, res: Response) => {
  const { userId, product } = req.body;
  const result = await Service.placeOrder(userId, product);
  res.json(result);
};

export const getByUser = async (req: Request, res: Response) => {
  const orders = await Service.listUserOrders(req.params.userId);
  res.json(orders);
};