import { CreateUserDTO, User } from "./user.types";
import { randomUUID } from "crypto";

export const createUser = (dto: CreateUserDTO): User => ({
  id: randomUUID(),
  name: dto.name.trim(),
  email: dto.email.toLowerCase(),
});
