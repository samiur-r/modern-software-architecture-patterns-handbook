import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const saveEvent = async (aggregateId: string, type: string, data: any) => {
  await prisma.event.create({
    data: {
      aggregateId,
      type,
      payload: JSON.stringify(data),
    },
  });
};

export const getEventsByAggregateId = async (aggregateId: string) => {
  const events = await prisma.event.findMany({
    where: { aggregateId },
    orderBy: { createdAt: 'asc' }
  });

  return events.map(e => ({ type: e.type, data: JSON.parse(e.payload) }));
};