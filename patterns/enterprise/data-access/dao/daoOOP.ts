import { prisma } from 'import-path';
import { User } from 'import-path';

export class UserDAO {
  async getUserById(id: number): Promise<User | null> {
    return prisma.user.findUnique({ where: { id } });
  }

  async createUser(data: Omit<User, 'id'>): Promise<User> {
    return prisma.user.create({ data });
  }

  async getAllUsers(): Promise<User[]> {
    return prisma.user.findMany();
  }
}
