import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const createUser = async (name: string, email: string) =>
  prisma.user.create({ data: { name, email } });

export const getUserById = async (id: string) =>
  prisma.user.findUnique({ where: { id } });