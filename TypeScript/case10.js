// Check num is positive or negative
function checkSign(num) {
    if (num > 0) {
        console.log("Positive");
    }
    else {
        console.log("Negative");
    }
}
// check num is even or odd
function evenOrOdd(num) {
    if (num % 2 == 0) {
        console.log("Even");
    }
    else {
        console.log("Odd");
    }
}
// getGrade - using if...else if...else
function getGrade(score) {
    if (score >= 90) {
        return "A";
    }
    else if (score >= 80) {
        return "B";
    }
    else if (score >= 70) {
        return "C";
    }
    else if (score >= 60) {
        return "D";
    }
    else {
        return "F";
    }
}
// provideFeedback - using switch
function provideFeedback(grade) {
    switch (grade) {
        case "A":
            console.log("Excellent Ferformance!");
            break;
        case "B":
            console.log("Good job!");
            break;
        case "C":
            console.log("Average work.");
            break;
        case "D":
            console.log("Below average work.");
            break;
        case "F":
            console.log("Failed.");
            break;
        default:
            console.log("Invalid grade.");
            break;
    }
}
// function calls
checkSign(10);
evenOrOdd(7);
var grade = getGrade(85);
console.log("Grade:", grade);
provideFeedback(grade);
