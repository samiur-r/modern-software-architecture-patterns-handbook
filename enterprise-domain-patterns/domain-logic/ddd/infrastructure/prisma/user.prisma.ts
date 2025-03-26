import { UserRepository } from "@/domain/user/user.repository";
import { User } from "@/domain/user/user.types";
import { prisma } from "./client";

export const prismaUserRepository: UserRepository = {
  findByEmail: async (email) => {
    const user = await prisma.user.findUnique({ where: { email } });
    return user ? { id: user.id, name: user.name, email: user.email } : null;
  },

  save: async (user: User) => {
    const created = await prisma.user.create({ data: user });
    return { id: created.id, name: created.name, email: created.email };
  },
};
