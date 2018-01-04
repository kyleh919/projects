// Calculating my current age in dog years
//     The first two human years of a dog's life count as 10.5 dog years each.
//     Each human year following counts as 4 dog years.

// my current age
const myAge = 26;

// first two human years of a dog's life count as 10.5 dog years each
let earlyYears = 2;
earlyYears *= 10.5;

// because we accounted for the first two years in the earlyYears calculation, remove 2 years from myAge
let laterYears = myAge - 2;

// each human year following earlyYears counts as 4 dog years
laterYears *= 4;

// sums up all calculated years for dogs age equation
const myAgeInDogYears = earlyYears + laterYears;

// sets myName to all lowercase letters
const myName = "Kyle";
myName.toLowerCase();

// prints name and my age in dog years into a string
console.log(`My name is ${myName}. I am ${myAgeInDogYears} years old in dog years.`);
