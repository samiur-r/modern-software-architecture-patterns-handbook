export type UserCreatedEvent = {
  id: string;
  name: string;
  email: string;
};

export type InvoiceRequest = {
  userId: string;
  amount: number;
};