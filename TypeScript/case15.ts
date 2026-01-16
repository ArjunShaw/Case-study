type Instructor={
    name:string
    subject:string
}
type Admin={
    name:string
    department:string
}
type InstructorOrAdmin = Instructor | Admin;

let a : InstructorOrAdmin = {name:"Alice", subject:"Math"};
let b : InstructorOrAdmin = {name:"Bob", department:"Science"};
console.log(a);
console.log(b);

// 2nd Question create a type ReadonlyAssignment where none of the fields can be changed.
type Assignment = { title: string; dueDate: string; points: number; }
type ReadonlyAssignment = Readonly<Assignment>;
const date = new Date();

let obj : ReadonlyAssignment = { title: "Homework 1", dueDate: date.toDateString(), points: 100 };
console.log(obj);

//create a type StatsAsStrings that has the same keys, but all values are strings.(Mapped)
type LearnerStats = { quizzes: number; videos: number; assignments: number; }
type StatsAsStrings = {
  [K in keyof LearnerStats]: string;
};

let obj3 : LearnerStats = { quizzes: 5, videos: 10, assignments: 3 };
let obj2 : StatsAsStrings = { quizzes: "5", videos: "10", assignments: "3" };

console.log(obj3);
console.log(obj2);