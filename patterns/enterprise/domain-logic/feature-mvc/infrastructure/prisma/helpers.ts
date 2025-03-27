import { User as PrismaUser } from "@prisma/client";
import { User } from "@/features/user/user.types";

export const toUserEntity = (prismaUser: PrismaUser): User => ({
  id: prismaUser.id,
  name: prismaUser.name,
  email: prismaUser.email,
});
