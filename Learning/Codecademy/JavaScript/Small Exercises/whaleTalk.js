// Whale Talk short project
/*
Takes a sentence and translates it to 'whale talk'. Translates 'Turpentine and turtles' to 'UUEEIEE A UUEE'. So, it takes every vowel in a given sentence and prints that vowel - if it is a U or an E then it is doubled.
*/
// input sentence to translate
const input = 'TurpEntine and turtles';
// list of vowels to check for
const vowels = ['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u'];
// array the result is stored in
let resultArray = [];

// this loops through the input string letter by letter
for(let inputIndex=0; inputIndex<input.length; inputIndex++) {
  //console.log(input[inputIndex]);

  // loops throught he vowel array to check if the letter is in the input string
  for(let vowelsIndex=0; vowelsIndex<vowels.length; vowelsIndex++) {
    //console.log('\t' + vowels[vowelsIndex]);

    // checks for vowels - if the current letter is a vowel, place it in the result array
    if(input[inputIndex] === vowels[vowelsIndex]) {
     console.log('Vowel found: ' + vowels[vowelsIndex]);
     resultArray.push(input[inputIndex]);
    }
  }

  // checks if the vowel is an e or u, if so add it to the result array
  if(input[inputIndex] === 'e' || input[inputIndex] === 'E') {
    resultArray.push(input[inputIndex]);
  } else if(input[inputIndex] === 'u' || input[inputIndex] === 'U') {
    resultArray.push(input[inputIndex]);
  }
}

// remove the commas from the result array and capitalize every entry
console.log();
console.log(resultArray.join('').toUpperCase());
