interface PaymentGateway {
  processPayment(amount: number): void;
}

// Concrete Products
class StripeGateway implements PaymentGateway {
  processPayment(amount: number): void {
    console.log(`Processing $${amount} with Stripe`);
  }
}

class RazorpayGateway implements PaymentGateway {
  processPayment(amount: number): void {
    console.log(`Processing ₹${amount} with Razorpay`);
  }
}

class PayPalGateway implements PaymentGateway {
  processPayment(amount: number): void {
    console.log(`Processing $${amount} with PayPal`);
  }
}

// Factory (Creator)
abstract class PaymentFactory {
  abstract createGateway(): PaymentGateway;

  makePayment(amount: number): void {
    const gateway = this.createGateway();
    gateway.processPayment(amount);
  }
}

// Concrete Factories
class USPaymentFactory extends PaymentFactory {
  createGateway(): PaymentGateway {
    return new StripeGateway();
  }
}

class IndiaPaymentFactory extends PaymentFactory {
  createGateway(): PaymentGateway {
    return new RazorpayGateway();
  }
}

class GlobalPaymentFactory extends PaymentFactory {
  createGateway(): PaymentGateway {
    return new PayPalGateway();
  }
}

// Usage
function getFactoryByRegion(region: string): PaymentFactory {
  switch (region.toLowerCase()) {
    case "us":
      return new USPaymentFactory();
    case "india":
      return new IndiaPaymentFactory();
    default:
      return new GlobalPaymentFactory();
  }
}

const region = "India"; // could be dynamic
const factory = getFactoryByRegion(region);
factory.makePayment(499);
