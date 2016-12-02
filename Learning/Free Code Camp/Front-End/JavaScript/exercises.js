/* card counting function */
var count = 0;

function cc(card) {
  // Only change code below this line
  switch(card){
    case 2:
    case 3:
    case 4:
    case 5:  
    case 6:
      count+=1;
      break;
    case 7:
    case 8:
    case 9:
      count+=0;
      break;
    case 10:
    case "J":
    case "Q":  
    case "K":  
    case "A":
      count-=1;
      break;
    default:
      return undefined;
  }
  
  if(count>0){
    return count + " Bet";
  }
  else if(count<=0){
    return count + " Hold";
  }
  else {
    return "Change Me";  
  }
  
  // Only change code above this line
}

// Add/remove calls to test your function.
// Note: Only the last will display
cc(2); cc(3); cc(7); cc('K'); cc('A');




/* album collection using nested objects and arrays */
/*
rules:
Write a function which takes an album's id (like 2548),
a property prop (like "artist" or "tracks"), and a value (like "Addicted to Love") to modify the data in this collection.

If prop isn't "tracks" and value isn't empty (""), update or
set the value for that record album's property.

Your function must always return the entire collection object.

There are several rules for handling incomplete data:

If prop is "tracks" but the album doesn't have a "tracks" property,
create an empty array before adding the new value to the album's corresponding property.

If prop is "tracks" and value isn't empty (""), push the value onto the
end of the album's existing tracks array.

If value is empty (""), delete the given prop property from the album.
*/


// Setup
var collection = {
    "2548": {
      "album": "Slippery When Wet",
      "artist": "Bon Jovi",
      "tracks": [ 
        "Let It Rock", 
        "You Give Love a Bad Name" 
      ]
    },
    "2468": {
      "album": "1999",
      "artist": "Prince",
      "tracks": [ 
        "1999", 
        "Little Red Corvette" 
      ]
    },
    "1245": {
      "artist": "Robert Palmer",
      "tracks": [ ]
    },
    "5439": {
      "album": "ABBA Gold"
    }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
function updateRecords(id, prop, value) {
  if((prop !== "tracks") && (value !== "")){
    collection[id][prop] = value;
  }
  else if(value === ""){
    delete collection[id][prop];
  }
  else if(prop === "tracks"){
    if(collection[id].hasOwnProperty(prop) === false){
      collection[id][prop] = [];
      collection[id][prop].push(value);
    }
    if(value !== ""){
      collection[id][prop].push(value);
    }
  }
  else{
     return "Wrong";
  }
 
  
  
  
  return collection;
}

// Alter values below to test your code
updateRecords(5439, "artist", "ABBA");


/*
nested array for loops
- multiplies the product variable by each number in the sub-arrays of arr
*/


function multiplyAll(arr) {
  var product = 1;
  // Only change code below this line
  
  for(var i=0;i<arr.length;i++){
    for(var j=0; j<arr[i].length; j++){
      product *= arr[i][j];
    }
  }
  // Only change code above this line
  return product;
}

// Modify values below to test your code
multiplyAll([[1,2],[3,4],[5,6,7]]);



//Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["Javascript", "Gaming", "Foxes"]
    }
];


/*
A lookUpProfile function that takes firstName and a property (prop)
as arguments has been pre-written for you.

The function should check if firstName is an actual contact's firstName
and the given property (prop) is a property of that contact.

If both are true, then return the "value" of that property.

If firstName does not correspond to any contacts then return "No such contact"

If prop does not correspond to any valid properties then return "No such property"
*/

function lookUpProfile(firstName, prop){
// Only change code below this line
  var countFN=0;
  var countProp=0;
  //test = contacts[2].firstName
  //return test;
  
  for(var i=0; i<contacts.length; i++){
    if((contacts[i].firstName === firstName) && (contacts[i].hasOwnProperty(prop)))
    {
      return contacts[i][prop];
    }
  }
  
  for(var j=0; j<contacts.length; j++){
    if(contacts[j].firstName !== firstName){
      countFN++;
      if(countFN===contacts.length){
        return "No such contact";
      }
    }
  }
  
  for(var k=0; k<contacts.length; k++){
    if(contacts[k].hasOwnProperty(prop)===false){
      countProp++;
      if(countProp===contacts.length){
        return "No such property";
      }
    }
  }
  
// Only change code above this line
}

// Change these values to test your function
lookUpProfile("Bob", "likes");

