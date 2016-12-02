/*
Reverse the provided string.
*/

function reverseString(str) {
  var temp="";
  var testArr=[];//["h", "e", "l", "l", "o"];
  
  for(var i=0; i<str.length; i++){
    testArr[i] = str[i];
  }
  
  testArr=testArr.reverse();
  str=testArr.join("");
  
  //testArr[0] = str[0];
  
  return str;
}

reverseString("hello");


/*
factorialize a number
*/


function factorialize(num) {
  
  var temp=[];
  
  if(num === 0){
  return 1;
  }
  
  for(var i=0; i<num; i++){
    temp[i] = num - i;
  }
  for(var j=1; j<temp.length; j++){
    num*=temp[j];
  }
  
  return num;
}

factorialize(5);



/*
checking for palindromes
*/


function palindrome(str) {
  
  var tempArr = [];
  var strRev;
  
  var regex_Symbols = /\W|[_]/g; // all non-words or underscores (_)
  
  // sets the string to lower case and removes all non-alphanumeric characters (punctuation, spaces and symbols) 
  str = str.toLowerCase();
  str = str.replace(regex_Symbols, "");
  //return str;
  
  // places each character in the array individually
  for(var i=0; i<str.length; i++){
    tempArr[i]=str[i];
  }
  
  // reverses the array and then joins the elements of the array to make a word
  tempArr = tempArr.reverse();
  strRev = tempArr.join("");
  
  //return strRev;
  
  // is the reversed string equal to the original string? True = palindrome
  if(strRev==str){
    return true;
  }
  else{
    return false;
  }
}

palindrome("(*(*_eye 999__eye))");

/*
finding the longest word in a string
*/

function findLongestWord(str) {
  var arr=[];
  var len = 0;
  var wordLen = 0;
  
  arr=str.split(" ");
  
  for(var i=0; i<arr.length; i++){
    wordLen = arr[i].length;
    if(wordLen >= len){
      len = wordLen;
    }
  }

  return len;
}


findLongestWord("The quick brown fox jumped over the lazy dog");


/*
title case every word in a string by capitalizing the first letter of each word

handles random capitalization within the string
*/

function titleCase(str) {
  
  var arr=[];
  var temp ="";
  var flag=1;
  
  arr=str.split("");
  
  for(var i=0;i<arr.length;i++){
    
    
    if(flag == 1){
      temp=arr[i];
      arr[i]=temp.toUpperCase();
    }
    else{
      temp=arr[i];
      arr[i]=temp.toLowerCase();
    }
    
    if(arr[i] == " "){
      flag = 1;
    }
    else{
      flag = 0;  
    }
    
  }
  
  arr = arr.join("")
  return arr;
}

titleCase("I'm a little tea pot");


/*
Return an array consisting of the largest number from
each provided sub-array. For simplicity, the provided array will
contain exactly 4 sub-arrays.
*/

function largestOfFour(arr) {
  var newArr = [0, 0, 0, 0];
  var temp = 0;
  
  for(var i=0;i<arr.length;i++){
    for(var j=0; j<4; j++){
      if(arr[i][j] > newArr[i]){
        temp = arr[i][j];
        newArr[i] = temp;
      }
    }
  }
  
  return newArr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);



/*
Check if a string (first argument, str) ends with the given target string (second argument, target).
*/

function confirmEnding(str, target) {
  
  var arr = [];
  var cmpIndex = 0;
  var targetLen = 0;
  var compare = "";
  
  arr = str.split(" "); // splits the string up into an array at every space
  cmpIndex = arr.length-1; // finds the index of the last element in the array using the length of the array
  
  compare = arr[cmpIndex]; // grabs the last element of the array
  targetLen = 0 - target.length; // .substr(index) - index operates given that it is positive (if 4, strLen+4, grabs 4th character and beyond from a string). if negative, strLen-4
  compare = compare.substr(targetLen); // grabs the targetLen index and beyond of the given string
  
  if(compare === target){
    return true;
  }
  else{
    return false;
  }
}

confirmEnding("He has to give me a new name", "name");

/*
Repeat a given string (first argument) num times (second argument).
Return an empty string if num is not a positive number.
*/

function repeatStringNumTimes(str, num) {
  
  var arr = [];
  
  if(num < 0){
    return "";
  }
  else {
    for(var i=0; i < num; i++){
      arr[i] = str;
    }
  }
  str = arr.join("");
  return str;
}

repeatStringNumTimes("abc", 3);

/*
Truncate a string (first argument) if it is longer than the given maximum string
length (second argument). Return the truncated string with a ... ending.

Note that inserting the three dots to the end will add to the string length.

However, if the given maximum string length num is less than or equal to 3, then the addition
of the three dots does not add to the string length in determining the truncated string.
*/

function truncateString(str, num) {
  
  if(num <= 3){
    for(var j=0; j < num; j++){
      newStr += str[j];
    }
    newStr += "...";
  }
  else if(str.length > num){
    for(var i=0; i < num-3; i++){
      newStr += str[i];
    }
    newStr += "...";
  }
  else{
    newStr = str;
  }

  return newStr;  
}

truncateString("A-tisket a-tasket A green and yellow basket", 3);


/*
Write a function that splits an array (first argument) into groups the length
of size (second argument) and returns them as a two-dimensional array.
*/
function chunkArrayInGroups(arr, size) {
 
  var newArr = [];
  var a;
  var index1 = 0;
  var index2 = index1+size;
 
  for(var i=0; i<(arr.length/size); i++){
    a = arr.slice(index1, index1+size);
   
    newArr.push(a);
   
    index1 += size;
  }
 
  return newArr;
}
 
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4);

/*
Return the remaining elements of an array after chopping off n elements from the head.
*/

function slasher(arr, howMany) {
  var a;
 
  for(var i=0;i<howMany;i++){
    a = arr.shift()
  }
 
  return arr;
}
 
slasher([1, 2, 3], 2);

/*
Return true if the string in the first element of the array contains
all of the letters of the string in the second element of the array.
*/
function mutation(arr) {
  
  var first = arr[0];
  var second = arr[1];
  var secondTemp;
  
  first = first.toLowerCase();
  second = second.toLowerCase();
  
  for(var i=0; i<second.length;i++){
    secondTemp = second[i];
    // checks the value of 'first' starting from index 0 for 'secondTemp'
    // returns -1 if value not found, hence, false. If no -1's then must be true
    secondTemp = first.indexOf(secondTemp, 0);
    if(secondTemp === -1){
      return false;
    }
  }
  return true;
}

mutation(["hello", "hey"]);


/*
Remove all falsy values from an array.
Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
*/
function check(element){
  if((element !== false)||(element !== null)||(element !== 0)||(element !== "")||(element !== undefined)||(element.isNan === false)){
    return element;
  }
}

function bouncer(arr) {
  arr=arr.filter(check);
  return arr;
}

bouncer([7, "ate", "", false, 9]);


/*
You will be provided with an initial array (the first argument in the destroyer
function), followed by one or more arguments. Remove all elements from the
initial array that are of the same value as these arguments.
*/

function check(array){
  return array != this;
}

function destroyer(arr) {
  var a = arr.slice.call(arguments, 1);
  var temp;
 
  for(var i=0; i<a.length; i++){
    temp = a[i];
    arr = arr.filter(check, temp);
  } 
  
  return arr;
}
 
destroyer([1, 2, 3, 1, 2, 3], 2, 3);

/*
Return the lowest index at which a value (second argument) should be inserted
into an array (first argument) once it has been sorted. The returned value
should be a number.

The default sort order is according to string Unicode code points.
Watch out that 10 comes before 2, because '10' comes before '2' in
Unicode code point order.
*/

function check(a, b){
  return a-b;
}
 
 
function getIndexToIns(arr, num) {
 
  arr = arr.sort(check);
   
  for(var i=0; i<arr.length; i++){
    if(num === arr[i]){
      return i;
    }
    else if(num >= arr[i]){
      if(num <= arr[i+1] || arr[i+1] == null){
        return i+1;
      }
    }
  }
 
}
 
getIndexToIns([2, 5, 10], 15);