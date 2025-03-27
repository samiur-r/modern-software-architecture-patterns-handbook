import { PrismaClient, User as PrismaUser } from "import-path";
const prisma = new PrismaClient();

export const createUserRecord = (user: PrismaUser) => ({
  getInfo: () => user,

  update: async (data: Partial<PrismaUser>) => {
    const updated = await prisma.user.update({
      where: { id: user.id },
      data,
    });
    return createUserRecord(updated);
  },

  delete: async () => {
    await prisma.user.delete({ where: { id: user.id } });
  },
});

export const findUserById = async (id: string) => {
  const user = await prisma.user.findUnique({ where: { id } });
  return user ? createUserRecord(user) : null;
};

export const createUser = async (data: { name: string; email: string }) => {
  const created = await prisma.user.create({ data });
  return createUserRecord(created);
};

// usage

const user = await findUserById("abc123");
const updatedUser = await user?.update({ name: "Updated FP" });
