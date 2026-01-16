//Variables & Types
var age = 21;
var userName = "Arjun";
var isLoggedin = true;
// age = "nmae"
var PI = 3.14;
//Functions
function sum(a, b) {
    return a + b;
}
console.log(sum(2, 6));
function greet(name, msg) {
    if (msg === void 0) { msg = "how are you default"; }
    console.log("Hello, ".concat(name, " and ").concat(msg, " "));
}
greet("Prem");
// Array
var arr = [1, 2, 3, 4, 5];
var arr2 = ["Hello", "Brothers", "How are you?"];
var arr3 = [1, 3, 2, "Arjun", "name"];
arr.push(6);
arr.pop();
console.log(arr);
// tupes
var tup = [1, "Arjun"];
console.log(tup[0]);
// enum
var Direction;
(function (Direction) {
    Direction["UP"] = "up";
    Direction["Down"] = "down";
    Direction["Left"] = "left";
    Direction["Right"] = "right";
})(Direction || (Direction = {}));
console.log(Direction.UP);
function dataUser(obj) {
    return obj;
}
var a = dataUser({ name: "Prem", email: "prem@gmail.com", age: 23 });
console.log(a);
function abcd(obj) {
    console.log(obj);
}
var a1 = abcd("jhk");
console.log(a1);
// class & object
var Student = /** @class */ (function () {
    function Student(nmae, rollNo) {
        this.nmae = nmae;
        this.rollNo = rollNo;
    }
    return Student;
}());
var a2 = new Student("prem", 22);
console.log(a2);
var year = 2000;
/*let input = prompt("Enter a year")
if(input !== null ){
    let year : number = parseInt(input);  */ // isko sirf cosole y abrowser mainn use kaar sakte hai
if (year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0)) {
    console.log("The number is ".concat(year, " is a leap year"));
}
else {
    console.log("The number is ".concat(year, " is not a leap year"));
}
var num = 12;
if (num > 0) {
    console.log("Positive number");
}
else if (num == 0) {
    console.log("Zero");
}
else {
    console.log("Negative number");
}
