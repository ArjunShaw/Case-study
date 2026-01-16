//Declare a variable score with let
var score = 95;
console.log("Initial score is: " + score);
// Block scope demonstration
if (score >= 90) {
    var score_1 = 100; // block-scoped variable
    console.log("Excellent! Your score is: " + score_1);
}
console.log("Your score is: " + score);
// constat delaclation
var pi = 3.14159;
console.log("Value of Pi is: " + pi);
// pi = 3.14; // This will cause an error since pi is a constant
// score = 98; // This will cause an error since score is declared with let
