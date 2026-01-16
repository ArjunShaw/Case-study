// let a : number = 5;
// let b : number = 20;
// let c : number = a * b;
// console.log(c);
// function sum(a: number, b : number) : number{
//     return a / b;
// }
// let result = sum(10, 5);
// console.log(result);
// interfaces
// interface User{
//     name : string,
//     email:string,
//     password : string,
//     gender?: string;
// }
// function userData(obj : User) : void {
//     // return obj;
//     console.log("User Name : " + obj.name);
//     console.log("User Email : " + obj.email);
//     console.log("User Password : " + obj.password);
// }
// userData ({name : "Arjun Shaw", email : "arjun@gmial.com", password : "arjun1234", gender : "male"});
// classes-----------------
// class Device {
//     name = "lg";
//     price = 1200;
//     cate = "digital";
// }
// let di = new Device();
// let d2 = new Device();
// console.log(di);
// console.log(d2);
// class humanMaker{
//     name : string;
//     constructor( name : string, public isHandsome : boolean){
//         this.name = name;
//     }
// }
// let b1 = new humanMaker("Arjun", false);
// console.log(b1);
// class User{
//     constructor(public readonly name: string){}
//     changeName(){
//         this.name = "Shaw"; // Error: Cannot assign to 'name' because it is a read-only property.
//     }
// }
// let u1 = new User("Arjun");
// console.log(u1.name);
// u1.changeName();
// console.log(u1.name);
// Getter and Setter=================
// class User{
//     constructor(public _name: string){}
//     get name(){
//         return this._name;
//     }
//     set name(value: string){
//         this._name= value
//     }
// }
// let u1 = new User("Arjun");
// console.log(u1);
// u1.name = "Prem";
// console.log(u1);
// // generics function
// function abcd<T>(a : T) {
//     return a;
// }
// console.log(abcd(12));
// console.log(abcd("Arjun"));
// generics interface
// interface halua<T>{
//     name: string;
//     age : number;
//     key : T;
// }
// function abcd(obj : halua<string>){
//     return obj;
// }
// console.log(abcd({name: "Arjun", age:  12, key : "kjefshb"}));
// generic in class===
var some = /** @class */ (function () {
    function some(key) {
        this.key = key;
    }
    return some;
}());
var b1 = new some("Arjun");
var b2 = new some(12);
console.log(b1);
console.log(b2);
