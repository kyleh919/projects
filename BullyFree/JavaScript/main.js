/*
Title: Bully Free
***************************************

You and Bobby Brighton are trying to stand up to the school bully, Tommy Twotone, before he takes over the school. Will you take a stand, or will you let Tommy continue his reign?

***************************************

Characters and Attributes:
.You - name, age, special powers (can lift objects with mind), secretly strong when upset (called names, picked on, pushed around)

.Bobby Brighton - gives you advice, makes/spits spitballs

.Tommy Twotone - picks on classmates, likes to push people

.classmates - scared of Tommy Twotone, only will stand up to Tommy if others take the lead (throw food, push, shout, laugh)

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
			//startGame();
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