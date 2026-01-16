// displayMember
function displayMember(name: string, email?: string): void {
  if (email) {
    console.log(`Name: ${name}, Email: ${email}`);
  } else {
    console.log(`Name: ${name}`);
  }
}

// Call displayMember
displayMember("Arjun", "arjun@gmail.com");
displayMember("Rahul");


//  calculateFines
function calculateFines(...fines: number[]): number {
  let total = 0;
  for (let fine of fines) {
    total += fine;
  }
  return total;
}

console.log(calculateFines(5, 10, 2.5));


//  membership fee with default and custom discount
function membershipFee(amount: number, discount: number = 10): number {
  return amount - (amount * discount / 100);
}

console.log(membershipFee(100));      // default discount
console.log(membershipFee(100, 20));  // 20% discount


// Greeting visitors
const vipGreet = (name: string): void => {
  console.log(`Welcome VIP ${name}!`);
}

const greeting = (name :string) : void => {
  console.log(`Welcome VIP ${name}!`);
}

vipGreet("Alice");
greeting("Bob");

// factorial find using Recursion
function factorial(n: number): number {
  if(n === 1) return 1;
  return n * factorial(n-1);
}

console.log(factorial(5));

