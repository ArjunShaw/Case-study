// Declare variables called city
let city : string = "Kolkata";

// Declare variables called temperature
let temperature: number = 32;

// TypeScript infers boolean type
let isRaining = false; 

// function to display weather info
function weatherReport(city : string, temperature: number, isRaining: boolean): void {
    console.log( `In ${city}, it is ${temperature}°C. Is it raining? ${isRaining}`);

}


 // Call the function
weatherReport(city, temperature, isRaining);