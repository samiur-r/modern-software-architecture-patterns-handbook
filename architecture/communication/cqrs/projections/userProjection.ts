import { PrismaClient } from '@prisma/client';
import { subscribe } from '../events/eventBus';

const prisma = new PrismaClient();

subscribe('UserRegistered', async ({ id, name, email }) => {
  await prisma.userView.create({
    data: { id, name, email },
  });
});