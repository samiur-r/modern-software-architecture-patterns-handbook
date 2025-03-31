import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const createUser = (name: string, email: string) =>
  prisma.user.create({ data: { name, email } });

export const getUserById = (id: string) =>
  prisma.user.findUnique({ where: { id } });