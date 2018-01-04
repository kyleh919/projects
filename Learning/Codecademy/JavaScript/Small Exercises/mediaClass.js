/*
  This example shows how a parent class can be extended to a child class.

  Ways to move forward:
  Add more properties to each class (movieCast, songTitles, etc.)
  Create a CD class that extends Media.
  In .addRating(), make sure input is between 1 and 5.
  Create a method called shuffle for the CD class. The method returns a randomly
    sorted array of all the songs in the songs property.
  Create class called Catalog that holds all of the Media items in our library.

*/

class Media {
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }

  /* getters */
  get title() {
    return this._title;
  }

  get isCheckedOut() {
		return this._isCheckedOut;
  }

  get rating() {
    return this._ratings;
  }

  /* methods */
  getAverageRating() {
		const reducer = (accumulator, currentValue) => accumulator + currentValue;

    return (this._ratings.reduce(reducer))/(this._ratings.length);
  }

  toggleCheckOutStatus() {
    if(this._isCheckedOut) {
      this._isCheckedOut = false;
    } else {
      this._isCheckedOut = true;
    }
  }

  addRating(rating) {
    this._ratings.push(rating);
  }
}

class Book extends Media {
  constructor(author, title, pages) {
    super(title);

    this._author = author;
    this._pages = pages;
  }

  /* getters */
  get author() {
    return this._authors;
  }

  get pages() {
    return this._pages;
  }
}

class Movie extends Media {
  constructor(director, title, runTime) {
    super(title);

    this._director = director;
    this._runTime = runTime;
  }

  /* getters */
  get director() {
    return this._director;
  }

  get runTime() {
    return this._runTime;
  }
}

class CD extends Media {
  constructor(artist, title, songs) {
    super(title);

    this._artist = artist;
    this._songs = songs;
  }

  /* getters */
  get artist() {
    return this._artist;
  }

  get songs() {
    return this._songs;
  }
}


const historyOfEverything = new Book('Billy Bryson', 'A Short History of Nearly Everything', 544);
historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut);
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
console.log(historyOfEverything.getAverageRating());

const speed = new Movie('Jan de Bont', 'Speed', 116);
speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.getAverageRating());
