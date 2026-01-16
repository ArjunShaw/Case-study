//Create a variable for your favorite fruit and print it.
var favouriteFruite1 = "Mango";
console.log("My favourite fruit is: " + favouriteFruite1);
/*Write a function that
 takes a number and prints double its value. */
function printDoubleValue1(num) {
    console.log("Double the value is: " + (num * 2));
}
printDoubleValue1(5);
/* Define a class called Person
with a method sayHello that prints a greeting */
var Person1 = /** @class */ (function () {
    function Person1() {
    }
    Person1.prototype.sayHello = function () {
        console.log("Hello! Welcome to TypeScript.");
    };
    return Person1;
}());
var person1 = new Person1();
person1.sayHello();
