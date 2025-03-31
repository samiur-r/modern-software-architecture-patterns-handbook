import express from 'express';
import bodyParser from 'body-parser';
import userRouter from '../user-service/user.router';
import orderRouter from '../order-service/order.router';

const app = express();
app.use(bodyParser.json());

app.use('/api/users', userRouter);
app.use('/api/orders', orderRouter);

app.listen(3000, () => {
  console.log('🚪 Gateway running on http://localhost:3000');
});