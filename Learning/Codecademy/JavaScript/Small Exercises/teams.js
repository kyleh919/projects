/*
  Creates a team object with players & games. Provides functions to add to the
  objects players and games arrays.
*/

let team = {
  _players: [{
    				  	firstName: "Ryan",
              	lastName: "Getzlaf",
              	age: 32
  					 },
             {
               firstName: "Corey",
               lastName: "Perry",
             	 age: 31
             },
             {
               firstName: "Cam",
               lastName: "Fowler",
               age: 26
             }
            ],
  _games: [{
    				 opponent: "Kings",
    				 teamPoints: 4,
    				 opponentPoints: 0
  				 },
           {
             opponent: "Sharks",
             teamPoints: 5,
             opponentPoints: 0
           },
           {
             opponent: "Predators",
             teamPoints: 6,
             opponentPoints: 0
           }
  				],

  /* setters - none needed, do not want to change contents of properties*/

  /* getters */
  get getPlayers() {
  	return this._players;
	},

  get getGames() {
  	return this._games;
	},

  /* methods */
  addPlayer(firstName, lastName, age) {
    const player = {
      firstName: firstName,
      lastName: lastName,
      age: age
    };

    this._players.push(player);
  },

  addGame(opponent, teamPoints, opponentPoints) {
    const game = {
      opponent: opponent,
      teamPoints: teamPoints,
      opponentPoints
    };

    this._games.push(game);
  }
};

team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);
console.log(team.getPlayers);

team.addGame('Wild', 1, 0);
team.addGame('Rangers', 11, 0);
team.addGame('Flames', 7, 0);
console.log(team.getGames);
