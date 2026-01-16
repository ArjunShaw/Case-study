// Object to store answers
var answers = {};
//Create a function recordAnswer that takes a question ID and an answer of any type
function recordAnswer(questionId, answer) {
    answers[questionId] = answer;
}
// Record answers for different question IDs
recordAnswer(1, "TypeScript");
recordAnswer("q2", 42);
recordAnswer(3, true);
recordAnswer("q4", { name: "Alice", age: 30 });
// Print all recorded answers
console.log(answers);
