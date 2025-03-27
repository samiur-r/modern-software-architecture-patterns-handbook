import { PrismaClient, User as PrismaUser } from "import-path";
const prisma = new PrismaClient();

export class User {
  private data: PrismaUser;

  constructor(data: PrismaUser) {
    this.data = data;
  }

  static async findById(id: string): Promise<User | null> {
    const data = await prisma.user.findUnique({ where: { id } });
    return data ? new User(data) : null;
  }

  static async create(data: { name: string; email: string }): Promise<User> {
    const created = await prisma.user.create({ data });
    return new User(created);
  }

  async update(newData: Partial<PrismaUser>): Promise<void> {
    const updated = await prisma.user.update({
      where: { id: this.data.id },
      data: newData,
    });
    this.data = updated;
  }

  async delete(): Promise<void> {
    await prisma.user.delete({ where: { id: this.data.id } });
  }

  getInfo() {
    return this.data;
  }
}

//usage

const user = await User.findById('some-id');
await user?.update({ name: 'New Name' });

const newUser = await User.create({ name: 'Bob', email: 'bob@mail.com' });

