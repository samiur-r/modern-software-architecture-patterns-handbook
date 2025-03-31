import { APIGatewayEvent, Context } from 'aws-lambda';
import { registerUser } from './user/service';

export const register = async (event: APIGatewayEvent, _: Context) => {
  const body = JSON.parse(event.body || '{}');
  const { name, email } = body;

  const result = await registerUser(name, email);

  return {
    statusCode: result.success ? 200 : 400,
    body: JSON.stringify(result),
  };
};