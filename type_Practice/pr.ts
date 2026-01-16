//Variables & Types
let age :number = 21;
let userName : string = "Arjun";
let isLoggedin  :  boolean = true;

// age = "nmae"
const PI : number = 3.14;

//Functions
function sum(a: number, b : number) : number{
    return a + b;
}

console.log(sum(2, 6));

function greet(name : string, msg: string = "how are you default") : void {
    console.log(`Hello, ${name} and ${msg} `);
}

greet("Prem");


// Array
let arr : number[] = [1, 2, 3, 4, 5];
let arr2 : string[] = ["Hello", "Brothers", "How are you?"]
let arr3 : (number | string)[] = [1, 3, 2 , "Arjun", "name"]
arr.push(6);
arr.pop();
console.log(arr);

// tupes
let tup : [number , string] = [1,  "Arjun"];
console.log(tup[0])


// enum
enum Direction {
    UP = "up",
    Down= "down",
    Left = "left",
    Right = "right"
}

console.log(Direction.UP);

// inerfaces
interface User {
    name : string,
    email : string,
    age ?: number
}

function dataUser(obj : User) : User{
    return obj;
}

let a =dataUser({name : "Prem", email : "prem@gmail.com", age : 23});
console.log(a)

// type alias
type arg  =  string | number | null;

function abcd(obj : arg) : void {
    console.log(obj)
}

let a1 = abcd("jhk")
console.log(a1)

// class & object
class Student {
    constructor(public nmae: string, public rollNo : number){}
}

let a2 = new Student("prem", 22);
console.log(a2);


let year: number = 2000;
/*let input = prompt("Enter a year")
if(input !== null ){
    let year : number = parseInt(input);  */  // isko sirf cosole y abrowser mainn use kaar sakte hai


if(year % 400 === 0  || (year % 100 !== 0 && year % 4 === 0)){
    console.log(`The number is ${year} is a leap year`);
}else{
    console.log(`The number is ${year} is not a leap year`);
}


let num : number = 12;
if(num > 0 ){
    console.log("Positive number");
}else if(num == 0){
    console.log("Zero");
}else {
    console.log("Negative number")
}