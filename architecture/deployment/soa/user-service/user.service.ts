import * as Repo from './user.repository';
import { UserCreatedEvent } from '../messaging/shared-contracts';

export const registerUser = async (
  name: string,
  email: string
): Promise<UserCreatedEvent> => {
  const user = await Repo.createUser(name, email);
  return { id: user.id, name: user.name, email: user.email };
};