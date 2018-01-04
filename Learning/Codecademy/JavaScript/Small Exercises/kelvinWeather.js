// Calculating today's temperature from kelvin -> celsius -> fahrenheit
// constant for today's forecast
//const kelvin = 294;
const kelvin = prompt('What is the Kelvin temperature today?');

// converting kelvin to celsius
const celsius = kelvin - 273;

// converting celsius to fahrenheit
let fahrenheit = celsius * (9/5) + 32;

// rounds fahrenheit
fahrenheit = Math.floor(fahrenheit);

// uses ES6 string interpolation to display the degrees fahrenheit in a string
console.log(`The temperature is ${fahrenheit} degrees fahrenheit.`);
