import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const createOrder = async (userId: string, product: string) =>
  prisma.order.create({ data: { userId, product } });

export const getOrdersByUser = async (userId: string) =>
  prisma.order.findMany({ where: { userId } });