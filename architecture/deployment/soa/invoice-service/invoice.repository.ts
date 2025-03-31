import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const createInvoice = (userId: string, amount: number) =>
  prisma.invoice.create({ data: { userId, amount } });

export const getInvoicesByUser = (userId: string) =>
  prisma.invoice.findMany({ where: { userId } });