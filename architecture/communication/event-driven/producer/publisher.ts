import { publish } from '../messaging/broker';

export const registerUser = async (id: string, name: string) => {
  console.log('✅ User registered:', { id, name });
  await publish('UserRegistered', { id, name });
};