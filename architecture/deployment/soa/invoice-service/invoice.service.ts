import * as Repo from './invoice.repository';
import { InvoiceRequest } from '../messaging/shared-contracts';

export const issueInvoice = async (req: InvoiceRequest) => {
  return Repo.createInvoice(req.userId, req.amount);
};