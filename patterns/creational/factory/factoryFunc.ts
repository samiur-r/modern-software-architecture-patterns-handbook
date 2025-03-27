type PaymentGateway = {
  processPayment: (amount: number) => void;
};

// Concrete Implementations
const StripeGateway: PaymentGateway = {
  processPayment: (amount) => console.log(`Processing $${amount} with Stripe`),
};

const RazorpayGateway: PaymentGateway = {
  processPayment: (amount) =>
    console.log(`Processing ₹${amount} with Razorpay`),
};

const PayPalGateway: PaymentGateway = {
  processPayment: (amount) => console.log(`Processing $${amount} with PayPal`),
};

// Factory Function
const createPaymentGateway = (region: string): PaymentGateway => {
  switch (region.toLowerCase()) {
    case "us":
      return StripeGateway;
    case "india":
      return RazorpayGateway;
    default:
      return PayPalGateway;
  }
};

// Usage
const region = "us"; // from user preference or geo-IP
const gateway = createPaymentGateway(region);
gateway.processPayment(799);
