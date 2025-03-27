import { User } from "./user.types";

export interface UserRepository {
  findByEmail: (email: string) => Promise<User | null>;
  save: (user: User) => Promise<User>;
}
