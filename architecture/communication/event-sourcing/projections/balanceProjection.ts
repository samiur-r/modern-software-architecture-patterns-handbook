import { PrismaClient } from '@prisma/client';
import { rebuildAccountState } from '../aggregates/accountAggregate';

const prisma = new PrismaClient();

export const updateBalanceView = async (accountId: string) => {
  const state = await rebuildAccountState(accountId);
  await prisma.balanceView.upsert({
    where: { id: accountId },
    update: { balance: state.balance },
    create: { id: accountId, balance: state.balance },
  });
};