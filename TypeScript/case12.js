// displayMember
function displayMember(name, email) {
    if (email) {
        console.log("Name: ".concat(name, ", Email: ").concat(email));
    }
    else {
        console.log("Name: ".concat(name));
    }
}
// Call displayMember
displayMember("Arjun", "arjun@gmail.com");
displayMember("Rahul");
//  calculateFines
function calculateFines() {
    var fines = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        fines[_i] = arguments[_i];
    }
    var total = 0;
    for (var _a = 0, fines_1 = fines; _a < fines_1.length; _a++) {
        var fine = fines_1[_a];
        total += fine;
    }
    return total;
}
console.log(calculateFines(5, 10, 2.5));
//  membership fee with default and custom discount
function membershipFee(amount, discount) {
    if (discount === void 0) { discount = 10; }
    return amount - (amount * discount / 100);
}
console.log(membershipFee(100)); // default discount
console.log(membershipFee(100, 20)); // 20% discount
// Greeting visitors
var vipGreet = function (name) {
    console.log("Welcome VIP ".concat(name, "!"));
};
var greeting = function (name) {
    console.log("Welcome VIP ".concat(name, "!"));
};
vipGreet("Alice");
greeting("Bob");
// factorial find using Recursion
function factorial(n) {
    if (n === 1)
        return 1;
    return n * factorial(n - 1);
}
console.log(factorial(5));
