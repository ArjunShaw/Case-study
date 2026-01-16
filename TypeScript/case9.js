// Function implementation
var processOrder = function (orderId, callback) {
    console.log("Processing Order ID:", orderId);
    var status = "Packed";
    callback(status);
};
// Function call
processOrder(11, function (status) {
    console.log("Order Status:", status);
});
// Example customer
var customer = {
    id: "C101",
    name: "Arjun"
};
// Wrap Customer inside Container
var customerContainer = {
    value: customer,
    timestamp: new Date()
};
console.log(customerContainer);
