import { PrismaClient, User as PrismaUser } from "@prisma/client";

const prisma = new PrismaClient();

// --- Domain Entity ---
type User = {
  id: string;
  name: string;
  email: string;
};

const createUser = (id: string, name: string, email: string): User => ({
  id,
  name,
  email,
});

const updateName = (user: User, newName: string): User => ({
  ...user,
  name: newName,
});

// --- Mapper Functions ---
const toDomain = (prismaUser: PrismaUser): User =>
  createUser(prismaUser.id, prismaUser.name, prismaUser.email);

const toPersistence = (user: User): PrismaUser => ({
  id: user.id,
  name: user.name,
  email: user.email,
});

// --- Repository Functions ---
const findUserById = async (id: string): Promise<User | null> => {
  const record = await prisma.user.findUnique({ where: { id } });
  return record ? toDomain(record) : null;
};

const saveUser = async (user: User): Promise<void> => {
  const data = toPersistence(user);
  await prisma.user.upsert({
    where: { id: user.id },
    create: data,
    update: data,
  });
};

// --- Example Usage ---
(async () => {
  const user = await findUserById("some-id");
  if (user) {
    const updated = updateName(user, "New FP Name");
    await saveUser(updated);
  }
})();
