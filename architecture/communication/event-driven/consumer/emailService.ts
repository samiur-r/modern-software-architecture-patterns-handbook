import { subscribe } from '../messaging/broker';

subscribe('UserRegistered', async ({ id, name }) => {
  console.log(`📧 Sending welcome email to ${name} (user ID: ${id})`);
});