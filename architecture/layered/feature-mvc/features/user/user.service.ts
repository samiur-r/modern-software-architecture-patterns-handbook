import { CreateUserDTO } from "./user.schema";
import { userRepo } from "./user.repo";
import { randomUUID } from "crypto";

export const registerUser = async (dto: CreateUserDTO) => {
  const existing = await userRepo.findByEmail(dto.email);
  if (existing) throw new Error("User already exists");

  const user = {
    id: randomUUID(),
    name: dto.name.trim(),
    email: dto.email.toLowerCase(),
  };

  return userRepo.save(user);
};

export const getUserByEmail = async (email: string) => {
  const user = await userRepo.findByEmail(email);
  if (!user) throw new Error("User not found");
  return user;
};
