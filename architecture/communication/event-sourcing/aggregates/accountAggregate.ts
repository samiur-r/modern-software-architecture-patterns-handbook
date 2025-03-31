import { getEventsByAggregateId, saveEvent } from '../events/eventStore';

type AccountState = {
  id: string;
  balance: number;
};

export const rebuildAccountState = async (accountId: string): Promise<AccountState> => {
  const events = await getEventsByAggregateId(accountId);
  let state: AccountState = { id: accountId, balance: 0 };

  for (const event of events) {
    switch (event.type) {
      case 'MoneyDeposited':
        state.balance += event.data.amount;
        break;
      case 'MoneyWithdrawn':
        state.balance -= event.data.amount;
        break;
    }
  }

  return state;
};

export const deposit = async (accountId: string, amount: number) => {
  await saveEvent(accountId, 'MoneyDeposited', { amount });
};

export const withdraw = async (accountId: string, amount: number) => {
  await saveEvent(accountId, 'MoneyWithdrawn', { amount });
};