import * as Repo from './order.repository';

export const placeOrder = async (userId: string, product: string) => {
  const order = await Repo.createOrder(userId, product);
  return { success: true, order };
};

export const listUserOrders = async (userId: string) => {
  const orders = await Repo.getOrdersByUser(userId);
  return orders;
};