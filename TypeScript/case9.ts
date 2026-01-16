
// OrderStatus union type
type OrderStatus = "Pending" | "Packed" | "Delivered";

// processOrder function type alias
type ProcessOrder = (
  orderId: number,
  callback: (status: OrderStatus) => void
) => void;

// Function implementation
const processOrder: ProcessOrder = (orderId, callback) => {
  console.log("Processing Order ID:", orderId);
  let status: OrderStatus = "Packed";
  callback(status);
};

// Function call
processOrder(11, (status) => {
  console.log("Order Status:", status);
});



// CustomerID alias for string
type CustomerID = string;

// Customer object alias
type Customer = {
  id: CustomerID;
  name: string;
  email?: string;
};

// Example customer
let customer: Customer = {
  id: "C101",
  name: "Arjun"
};

// Generic Container<T>
type Container<T> = {
  value: T;
  timestamp: Date;
};

// Wrap Customer inside Container
let customerContainer: Container<Customer> = {
  value: customer,
  timestamp: new Date()
};

console.log(customerContainer);
