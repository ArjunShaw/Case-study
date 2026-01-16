let transactions = [ "checkout", "return", "priority", "cancelled"];

let transactionCount: any = {
  checkout: 0,
  return: 0,
  priority: 0,
  cancelled: 0
};

for (let i = 0; i < transactions.length; i++) {
  transactionCount[transactions[i]]++;
}

console.log(transactionCount);

// Infinite loop using while(true) with break on priority
let queue = ["checkout", "return", "priority", "cancelled"];

let i = 0;
while (true) {
  if (queue[i] === "priority") {
    console.log("Priority transaction found. Stopping loop.");
    break;
  }
  console.log(queue[i]);
  i++;
}

//Dynamic queue using do…while (push new returns)
let returnQueue: string[] = [];
let count = 0;

do {
  returnQueue.push("return");
  count++;
  console.log("Return added");
} while (count < 3);

console.log(returnQueue);

//Reset inventory using for…in
let inventory: any = {
  itemA: 10,
  itemB: 5,
  itemC: 8
};

for (let item in inventory) {
  inventory[item] = 0;
}

console.log(inventory);

//Display visitor names in reverse order
let visitors = ["Arjun", "Rahul", "Priya", "Neha"];

for (let i = visitors.length - 1; i >= 0; i--) {
  console.log(visitors[i]);
}


