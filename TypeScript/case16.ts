// Implement a PromotionSystem observer that announces special offers
// to customers when a drink is served

// Observer Interface
interface Observer {
  notify(msg: string):void;
}

// Customer Observer
class Customer implements Observer {
  notify(msg: string): void {
    console.log(`Customer: ${msg}`);
  }
}

// Inventory Observer
class Inventory implements Observer {
  notify(msg: string): void {
    console.log(`Inventory: ${msg}`);
  }
}

// PromotionSystem Observer 
class PromotionSystem implements Observer {
  notify(msg: string): void {
    console.log("Congratulations: you Get 20% OFF on your next drink!");
  }
}

// Subject
class DrinkOrder {
  private observers: Observer[] = [];

  addObserver(obj: Observer): void {
    this.observers.push(obj);
  }

  notifyAll(msg: string): void {
    for (let observer of this.observers) {
      observer.notify(msg);
    }
  }

  completeOrder(): void {
    this.notifyAll("Order complete!");
  }
}



let order = new DrinkOrder();

let ob1 = new Customer();
let ob2 = new Inventory();
let ob3 = new PromotionSystem();

order.addObserver(ob1);
order.addObserver(ob2);
order.addObserver(ob3);

order.completeOrder();
