/*


Characters and Attributes:
.You - name, age, grade, special powers (can lift objects with mind), secretly strong when upset (called names, picked on, pushed around)

.Bobby Brighton - gives you advice, makes/spits spitballs

.Tommy Twotone - picks on classmates, very strong, physical altercations

.classmates - scared of Tommy Twotone, only will stand up to Tommy if others take the lead (throw food, push, shout, laugh)


*/

//===========================
// characters
//===========================

function person(first, last) {
	this.first = first;
	this.last = last;
	if(this.first === "Bobby" && this.last === "Brighton") {
		this.action = "Tommy Twotone doesn't stand a chance!";
		this.power = spitball();
	}
	else if(this.first === "Tommy" && this.last === "Twotone") {
		this.action = "I run this school! I'm not scared of you!";
		this.power = push();
	}
	else {
		this.action = "Someone needs to stand up to Tommy, I'll do it!";
		this.power = secretPower();
	}
}

function classmate(name) {
	this.name = name;
	this.action = {
		homework: "Sorry, I think I have too much homework...",
		scared: "I can't... I'm way too afraid of Tommy...",
		brave: "Let's do this, Tommy is a twerp!"
	};
};

classmate.prototype.randomAction = function() {
	var randNum = Math.floor((Math.random()*3)+1);

	if(randNum === 1) {
		return this.action.homework;
	}
	else if(randNum === 2) {
		return this.action.scared;
	}
	else{
		return this.action.brave;
	}
};