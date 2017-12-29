/*
  This file contains an object to create a menu with three courses: appetizers,
  mains, and desserts.
*/

let menu = {
  _courses: {
    _appetizers: [],
    _mains: [],
    _desserts: [],

    /* getters */
    get getAppetizers() {
      return this._appetizers;
    },

    get getMains() {
      return this._mains;
    },

    get getDesserts() {
      return this._desserts;
    },

    /* setters */
    set setAppetizers(newAppetizer) {
      this._courses._appetizers = newAppetizer;
    },

    set setMains(newMain) {
      this._courses._mains = newMain;
    },

    set setDesserts(newDessert) {
      this._courses._desserts = newDessert;
    }
  },

  /* getters */
  get getCourses() {
    return {
      appetizers: this._courses._appetizers,
      mains: this._courses._mains,
      desserts: this._courses._desserts,
    };
  },

  /* setters */

  /* methods*/
  // adds a given dish to a specified course (courseName)
  // all dishes contain the name and a price in an object
  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice
    };

    // logic works fine. Have to fix setter methods
    /*if(courseName === '_appetizers') {
      this._courses.setAppetizers = dish;
    } else if(courseName === '_mains') {
      this._courses.setMains(dish);
    } else if(courseName === '_desserts') {
      this._courses.setDesserts(dish);
    }*/

    this._courses[courseName].push(dish);
  },

  // grabs the courses dishes and selects one random dish
  getRandomDishFromCourse(courseName) {
  	let dishes = this._courses[courseName];
    let randIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randIndex];
  },

  // using the random dish for each course, obtains the dish and price for for
  // course
  generateRandomMeal() {
    let appetizer = this.getRandomDishFromCourse('_appetizers');
    let main = this.getRandomDishFromCourse('_mains');
    let dessert = this.getRandomDishFromCourse('_desserts');
    let price = (appetizer.price) + (main.price) + (dessert.price);

    return 'Your meal - appetizer: ' + appetizer.name + ', main: ' + main.name + ', dessert: ' + dessert.name + '. Total Price = $' + price;
  }
};

/*
addDishToCourse(courseName, dishName, dishPrice)
*/

menu.addDishToCourse('_appetizers', 'Garlic Rolls', 2.22);
menu.addDishToCourse('_appetizers', 'Steak Bits', 3.33);
menu.addDishToCourse('_appetizers', 'Bread', 3.33);

menu.addDishToCourse('_mains', 'Steak', 4.44);
menu.addDishToCourse('_mains', 'Chicken', 5.55);
menu.addDishToCourse('_mains', 'Salmon', 6.66);

menu.addDishToCourse('_desserts', 'Pie', 7.77);
menu.addDishToCourse('_desserts', 'Cake', 8.88);
menu.addDishToCourse('_desserts', 'Gelato', 9.99);

let meal = menu.generateRandomMeal();
console.log(meal);
