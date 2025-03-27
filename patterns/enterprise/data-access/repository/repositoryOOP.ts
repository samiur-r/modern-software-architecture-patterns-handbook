import { UserDAO } from "import-path";

export class UserRepository {
  constructor(private userDAO: UserDAO) {}

  async getUserProfile(id: number) {
    const user = await this.userDAO.getUserById(id);
    if (!user) throw new Error("User not found");

    return {
      id: user.id,
      displayName: user.name,
      contact: user.email,
    };
  }

  async registerUser(name: string, email: string) {
    return this.userDAO.createUser({ name, email });
  }
}
