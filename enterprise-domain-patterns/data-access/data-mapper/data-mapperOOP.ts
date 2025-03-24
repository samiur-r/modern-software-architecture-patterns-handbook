import { PrismaClient, User as PrismaUser } from "@prisma/client";

const prisma = new PrismaClient();

// --- Domain Entity ---
class User {
  constructor(
    public readonly id: string,
    public name: string,
    public email: string
  ) {}

  updateName(newName: string) {
    this.name = newName;
  }
}

// --- Data Mapper ---
class UserMapper {
  static toDomain(prismaUser: PrismaUser): User {
    return new User(prismaUser.id, prismaUser.name, prismaUser.email);
  }

  static toPersistence(user: User): PrismaUser {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
    };
  }
}

// --- Repository ---
class UserRepository {
  async findById(id: string): Promise<User | null> {
    const record = await prisma.user.findUnique({ where: { id } });
    return record ? UserMapper.toDomain(record) : null;
  }

  async save(user: User): Promise<void> {
    const data = UserMapper.toPersistence(user);
    await prisma.user.upsert({
      where: { id: user.id },
      create: data,
      update: data,
    });
  }
}

// --- Example Usage ---
(async () => {
  const repo = new UserRepository();

  const user = await repo.findById("some-id");
  if (user) {
    user.updateName("Updated Name");
    await repo.save(user);
  }
})();
