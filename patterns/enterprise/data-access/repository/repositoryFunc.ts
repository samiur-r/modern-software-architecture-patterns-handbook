import { getUserById, createUser } from "import-path";

export const getUserProfile = async (id: number) => {
  const user = await getUserById(id);
  if (!user) throw new Error("User not found");
  return {
    id: user.id,
    displayName: user.name,
    contact: user.email,
  };
};

export const registerUser = async (name: string, email: string) => {
  return createUser(name, email);
};
