//Create a variable for your favorite fruit and print it.
let favouriteFruite1 : string = "Mango";
console.log("My favourite fruit is: " + favouriteFruite1);

/*Write a function that
 takes a number and prints double its value. */
function printDoubleValue1(num: number): void {
    console.log("Double the value is: " + (num * 2));
}
printDoubleValue1(5);

/* Define a class called Person 
with a method sayHello that prints a greeting */
class Person1 {
    sayHello() : void {
        console.log("Hello! Welcome to TypeScript.");
    }
}
let person1 = new Person1();
person1.sayHello();