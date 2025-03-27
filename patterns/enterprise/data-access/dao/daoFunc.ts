import { prisma } from "import-path";

export const getUserById = async (id: number) =>
  prisma.user.findUnique({ where: { id } });

export const createUser = async (name: string, email: string) =>
  prisma.user.create({ data: { name, email } });

export const getAllUsers = async () => prisma.user.findMany();
