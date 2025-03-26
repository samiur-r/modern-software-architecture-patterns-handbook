import { prisma } from "@/infrastructure/prisma/client";
import { User } from "./user.types";

export const userRepo = {
  findByEmail: async (email: string): Promise<User | null> => {
    const user = await prisma.user.findUnique({ where: { email } });
    return user;
  },

  save: async (user: User): Promise<User> => {
    return await prisma.user.create({ data: user });
  },
};
