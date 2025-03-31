type User = { id: string; name: string; email: string };

const users: User[] = [];

export const createUser = async (name: string, email: string): Promise<User> => {
  const user = { id: Date.now().toString(), name, email };
  users.push(user);
  return user;
};