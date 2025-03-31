import express from 'express';
import bodyParser from 'body-parser';
import * as UserService from '../user-service/user.service';
import * as InvoiceService from '../invoice-service/invoice.service';

const app = express();
app.use(bodyParser.json());

app.post('/api/onboard', async (req, res) => {
  const { name, email, initialAmount } = req.body;
  const userEvent = await UserService.registerUser(name, email);
  const invoice = await InvoiceService.issueInvoice({
    userId: userEvent.id,
    amount: initialAmount,
  });

  res.json({ user: userEvent, invoice });
});

app.listen(3000, () =>
  console.log('🚀 SOA Gateway running at http://localhost:3000')
);