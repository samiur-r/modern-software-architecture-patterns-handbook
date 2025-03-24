export type User = {
  id: string;
  name: string;
  email: string;
};

export type UserRepository = {
  findById: (id: string) => Promise<User | null>;
  save: (user: User) => Promise<void>;
};

export const createInMemoryUserRepo = (): UserRepository => {
  const store = new Map<string, User>();

  return {
    findById: async (id) => store.get(id) || null,
    save: async (user) => {
      store.set(user.id, user);
    },
  };
};

// usage.ts
const repo = createInMemoryUserRepo();
await repo.save({ id: "1", name: "Bob", email: "bob@example.com" });
const user = await repo.findById("1");
console.log(user); // { id: '1', name: 'Bob', email: 'bob@example.com' }
