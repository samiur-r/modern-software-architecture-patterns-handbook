type PaymentStrategy = (amount: number) => void;

const payWithStripe: PaymentStrategy = (amount) =>
  console.log(`💳 Paying $${amount} with Stripe`);

const payWithPaypal: PaymentStrategy = (amount) =>
  console.log(`💰 Paying $${amount} with PayPal`);

// Context function
const checkout = (payStrategy: PaymentStrategy) => ({
  pay: (amount: number) => payStrategy(amount),
});

// Usage
const stripeCheckout = checkout(payWithStripe);
stripeCheckout.pay(200);

const paypalCheckout = checkout(payWithPaypal);
paypalCheckout.pay(300);
