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


