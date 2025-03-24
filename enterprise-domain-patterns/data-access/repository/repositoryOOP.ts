class User {
  constructor(public id: string, public name: string, public email: string) {}
}

interface UserRepository {
  findById(id: string): Promise<User | null>;
  save(user: User): Promise<void>;
}

class InMemoryUserRepository implements UserRepository {
  private users: Map<string, User> = new Map();

  async findById(id: string): Promise<User | null> {
    return this.users.get(id) || null;
  }

  async save(user: User): Promise<void> {
    this.users.set(user.id, user);
  }
}

// usage.ts
const repo = new InMemoryUserRepository();
const user = new User("1", "Alice", "alice@example.com");
await repo.save(user);
const found = await repo.findById("1");
console.log(found); // User instance
