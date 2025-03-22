interface PaymentStrategy {
  pay(amount: number): void;
}

// Concrete strategies
class PayWithStripe implements PaymentStrategy {
  pay(amount: number) {
    console.log(`💳 Paying $${amount} with Stripe`);
  }
}

class PayWithPaypal implements PaymentStrategy {
  pay(amount: number) {
    console.log(`💰 Paying $${amount} with PayPal`);
  }
}

// Context
class Checkout {
  constructor(private paymentStrategy: PaymentStrategy) {}

  setStrategy(strategy: PaymentStrategy) {
    this.paymentStrategy = strategy;
  }

  pay(amount: number) {
    this.paymentStrategy.pay(amount);
  }
}

// Usage
const checkout = new Checkout(new PayWithStripe());
checkout.pay(100); // 💳 Paying $100 with Stripe

checkout.setStrategy(new PayWithPaypal());
checkout.pay(150); // 💰 Paying $150 with PayPal
