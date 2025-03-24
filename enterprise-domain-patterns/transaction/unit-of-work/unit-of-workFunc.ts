import { PrismaClient } from 'import-path';

const prisma = new PrismaClient();

// --- Transaction Wrapper ---
const withTransaction = async <T>(fn: (tx: PrismaClient) => Promise<T>): Promise<T> => {
  return prisma.$transaction(fn);
};

// --- Service Function ---
const placeOrder = async (
  userId: string,
  items: { productId: string; quantity: number }[]
): Promise<void> => {
  await withTransaction(async (tx) => {
    // 1. Create order and items
    const order = await tx.order.create({
      data: {
        userId,
        items: {
          create: items.map((item) => ({
            productId: item.productId,
            quantity: item.quantity,
          })),
        },
      },
    });

    // 2. Deduct stock
    for (const item of items) {
      await tx.product.update({
        where: { id: item.productId },
        data: {
          stock: { decrement: item.quantity },
        },
      });
    }

    return order;
  });
};

// --- Example Usage ---
(async () => {
  await placeOrder('user-123', [
    { productId: 'prod-1', quantity: 2 },
    { productId: 'prod-2', quantity: 1 },
  ]);
})();
