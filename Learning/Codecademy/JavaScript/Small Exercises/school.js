class School {
  constructor(name, level, numberOfStudents) {
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }

  /* getters */
  get name() {
    return this._name;
  }

  get level() {
    return this._level;
  }

  get numberOfStudents() {
    return this._numberOfStudents;
  }

  /* setters */
  set numberOfStudents(number) {
    if(typeof number === 'number'){
        this._numberOfStudents = number;
    } else {
      console.log('Invalid input: numberOfStudents must be set to a Number.');
    }
  }

  /* methods */
  quickFacts() {
    console.log(`${this._name} educates ${this._numberOfStudents} students, typically between the ages of ${this._level}.`)
  }

  static pickSubstituteTeacher(substituteTeachers) {
    const randNum = Math.floor(Math.random() * (substituteTeachers.length-1));
    return substituteTeachers[randNum];
  }
}

class PrimarySchool extends School {
  constructor(pickUpPolicy, name, numberOfStudents) {
    super(name, 'primary', numberOfStudents);

    this._pickUpPolicy = pickUpPolicy;
  }

  /* getters */
  get pickUpPolicy() {
    return this._pickUpPolicy;
  }
}

class MiddleSchool extends School {
  constructor(name, numberOfStudents) {
    super(name, 'middle', numberOfStudents);
  }
}

class HighSchool extends School {
  constructor(sportsTeams, name, numberOfStudents) {
    super(name, 'high', numberOfStudents);

    this._sportsTeams = sportsTeams;
  }

  /* getters */
  get sportsTeams() {
    return this._sportsTeams;
  }
}


const lorraineHansbury = new PrimarySchool('Students must be picked up by a parent, guardian, or family member over the age of 13.', 'Lorraine Hansburry', 514);
lorraineHansbury.quickFacts();
console.log(School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']));

const alSmith = new HighSchool(['Baseball', 'Basketball', 'Volleyball', 'Track and Field'], 'Al E. Smith', 415);
console.log(alSmith.sportsTeams);
