// takes a runners age and registration status to let them know what their bib
// number and starting time using control flow logic

let raceNumber = Math.floor(Math.random()*1000);
let registeredEarly = true;
let runnersAge = 26;

registeredEarly ? raceNumber+1000 : raceNumber;

if (registeredEarly && runnersAge > 18) {
  console.log(`Your start time for the race is 9:30 AM and your bib number is ${raceNumber}. Good luck!`);
} else if (registeredEarly || runnersAge > 18) {
  console.log(`Your start time for the race is 11:00 AM and your bib number is ${raceNumber}. Good luck!`);
} else if (!registeredEarly && runnersAge <= 18) {
  console.log(`Your start time for the race is 12:30 PM and your bib number is ${raceNumber}. Good luck!`);
} else {
  console.log('Please see the registration desk to fill out the necessary paperwork and collect your bib!');
}
