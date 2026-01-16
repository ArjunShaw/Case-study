var transactions = ["checkout", "return", "priority", "cancelled"];
var transactionCount = {
    checkout: 0,
    return: 0,
    priority: 0,
    cancelled: 0
};
for (var i_1 = 0; i_1 < transactions.length; i_1++) {
    transactionCount[transactions[i_1]]++;
}
console.log(transactionCount);
// Infinite loop using while(true) with break on priority
var queue = ["checkout", "return", "priority", "cancelled"];
var i = 0;
while (true) {
    if (queue[i] === "priority") {
        console.log("Priority transaction found. Stopping loop.");
        break;
    }
    console.log(queue[i]);
    i++;
}
//Dynamic queue using do…while (push new returns)
var returnQueue = [];
var count = 0;
do {
    returnQueue.push("return");
    count++;
    console.log("Return added");
} while (count < 3);
console.log(returnQueue);
//Reset inventory using for…in
var inventory = {
    itemA: 10,
    itemB: 5,
    itemC: 8
};
for (var item in inventory) {
    inventory[item] = 0;
}
console.log(inventory);
//Display visitor names in reverse order
var visitors = ["Arjun", "Rahul", "Priya", "Neha"];
for (var i_2 = visitors.length - 1; i_2 >= 0; i_2--) {
    console.log(visitors[i_2]);
}
