//Declare a variable score with let
let score : number = 95;
console.log("Initial score is: " + score);

// Block scope demonstration

if (score >= 90) {
    let score : number = 100; // block-scoped variable
    console.log("Inside a block score is : " + score);
    // let score : number = 90;  // we can't redclare same varaible name using let
    
}

console.log("Your score is: " + score);  

// constat delaclation
const pi : number = 3.14159;
console.log("Value of Pi is: " + pi);

// pi = 3.14; // This will cause an error since pi is a constant

