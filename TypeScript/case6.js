//Create a function processTransaction
function processTransaction(amount, isCredit, description) {
    if (description === void 0) { description = "No description provided"; }
    // If amount is negative → throw error (never)
    if (amount < 0) {
        throw new Error("Amount cannot be negative");
    }
    // Handle undefined description
    // const finalDescription = description ?? "No description provided";
    // Print transaction summary
    console.log("Amount:", amount);
    console.log("Type:", isCredit ? "Credit" : "Debit");
    console.log("Description:", description);
}
// function calls
processTransaction(500, true, "Salary credited");
processTransaction(200, false);
