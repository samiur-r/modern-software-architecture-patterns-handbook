import { createUser } from './repository';

export const registerUser = async (name: string, email: string) => {
  if (!name || !email) return { success: false, message: 'Invalid input' };

  const user = await createUser(name, email);
  return { success: true, user };
};