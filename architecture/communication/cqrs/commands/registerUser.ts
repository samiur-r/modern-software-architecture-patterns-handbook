import { PrismaClient } from '@prisma/client';
import { publish } from '../events/eventBus';

const prisma = new PrismaClient();

export const registerUser = async (name: string, email: string) => {
  if (!name || !email) throw new Error("Invalid input");

  const user = await prisma.user.create({
    data: { name, email },
  });

  await publish('UserRegistered', { id: user.id, name, email });
  return user;
};