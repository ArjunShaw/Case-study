// PaymentGateway interface (contract)
interface PaymentGateway {
  processPayment(amount: number): Promise<boolean>;
}

// BankTransferGateway implementation
class BankTransferGateway implements PaymentGateway {
  async processPayment(amount: number): Promise<boolean> {
    if (amount > 100000) {
      return false;
    }
    return true;
  }
}

// PaymentProcessor using Dependency Injection
class PaymentProcessor {
  constructor(private gateway: PaymentGateway) {}

  async pay(amount: number): Promise<void> {
    const success = await this.gateway.processPayment(amount);

    if (success) {
      console.log(`Payment of ₹${amount} is successfully transferred.`);
    } else {
      console.log("Payment failed");
    }
  }
}



let bt = new BankTransferGateway();
let pp = new PaymentProcessor(bt);

async function payment(): Promise<void> {
  await pp.pay(5000);       // success  
  await pp.pay(1000000);    // failed
}

payment();
