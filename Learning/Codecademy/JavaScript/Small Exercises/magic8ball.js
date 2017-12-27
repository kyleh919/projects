// takes hardcoded user question and generates a random number to return a
// magic eightball statement back to the user

let userName = 'Kyle';
let userQuestion = 'Should I go gamble?';
let randomNumber = Math.floor(Math.random() * 7);
let eightBall = '';

userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');

switch(randomNumber) {
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eightBall = 'It is decidedly so';
    break;
  case 2:
    eightBall = 'Reply hazy try again';
    break;
  case 3:
    eightBall = 'Cannot predict now';
    break;
  case 4:
    eightBall = 'Don\'t count on it';
    break;
  case 5:
    eightBall = 'My sources say no';
    break;
  case 6:
    eightBall = 'Outlook not so good';
    break;
  case 7:
    eightBall = 'Signs point to yes';
    break;
  default:
    eightBall = 'Error: please try again!';
    break;
}

console.log('Question: ' + userQuestion);
console.log('8-Ball Response: ' + eightBall);
