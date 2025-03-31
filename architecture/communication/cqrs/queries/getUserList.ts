import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getUserList = async () => {
  return prisma.userView.findMany(); // Read from projection table
};