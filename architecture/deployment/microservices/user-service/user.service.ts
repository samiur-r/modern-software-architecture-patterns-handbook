import * as Repo from './user.repository';
import { publish } from '../messaging/broker';

export const registerUser = async (name: string, email: string) => {
  const user = await Repo.createUser(name, email);
  publish('user_created', user);
  return { success: true, user };
};

export const findUser = async (id: string) => {
  const user = await Repo.getUserById(id);
  return user ? { success: true, user } : { success: false };
};