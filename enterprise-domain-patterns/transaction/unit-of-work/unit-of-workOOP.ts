import { PrismaClient } from 'import-path';

const prisma = new PrismaClient();

class UnitOfWork {
  constructor(private prisma: PrismaClient) {}

  async run<T>(fn: (tx: PrismaClient) => Promise<T>): Promise<T> {
    return this.prisma.$transaction(fn);
  }
}

class OrderService {
  constructor(private uow: UnitOfWork) {}

  async placeOrder(userId: string, items: { productId: string; quantity: number }[]) {
    await this.uow.run(async (tx) => {
      // 1. Create Order with Items
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
        include: { items: true },
      });

      // 2. Deduct stock for each product
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
  }
}

// --- Example Usage ---
(async () => {
  const service = new OrderService(new UnitOfWork(prisma));

  await service.placeOrder('user-123', [
    { productId: 'prod-1', quantity: 2 },
    { productId: 'prod-2', quantity: 1 },
  ]);
})();
