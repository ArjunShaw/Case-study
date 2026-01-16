// Declare variables called city
var city = "Kolkata";
// Declare variables called temperature
var temperature = 32;
// TypeScript infers boolean type
var isRaining = false;
// function to display weather info
function weatherReport(city, temperature, isRaining) {
    console.log("In ".concat(city, ", it is ").concat(temperature, "\u00B0C. Is it raining? ").concat(isRaining));
}
// Call the function
weatherReport(city, temperature, isRaining);
