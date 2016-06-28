/*
Title: Bully Free
***************************************

You and Bobby Brighton are trying to stand up to the school bully, Tommy Twotone,
	before he takes over the school. Will you take a stand, or will you let Tommy
	continue his reign?

***************************************

This file prompts the user to start a new game.

***************************************

Outcomes:
Win - stand up to Tommy Twotone and prevent his takeover
Lose - get picked on by Tommy Twotone

***************************************
*/


var userReady = "undefined";



/******TEST CODE******/
var zack = new classmate("Zack");

console.log(zack.name);

zack.action = zack.randomAction();
//console.log(zack.randomAction());
console.log(zack.action);

newGame();
/*********************/


function newGame() {

	do{
		userReady = prompt("Are you willing to do what it takes to take down Tommy Twotone?");

		if(userReady === "Yes" || userReady === "yes") {
			console.log("yes");
			startGame();
		}
		else if(userReady === "No" || userReady === "no") {
			console.log("no");
			confirm("Thanks for not helping, Tommy Twotone will own Brown High School forever!");
		}
		else {
			console.log("undefined");

			alert("Sorry, your input is undefined. Please try again and respond with either Yes or No.");
			newGame();
		};
	}
	while(userReady == "undefined");

};





//===========================
//===========================