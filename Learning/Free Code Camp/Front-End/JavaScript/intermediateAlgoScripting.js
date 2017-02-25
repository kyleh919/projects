/*
We'll pass you an array of two numbers. Return the sum of those two numbers
and all numbers between them.

The lowest number will not always come first
*/

function sumAll(arr) {
 
  var min = Math.min(arr[0], arr[1]);
  var max = Math.max(arr[0], arr[1]);
  var sum = 0;
 
  for(var i = min; i<=max; i++){
    sum += i;
  }
 
  return sum;
}
 
sumAll([1, 4]);



/*
Compare two arrays and return a new array with any items only found in one of the two
given arrays, but not both. In other words, return the symmetric difference of the two arrays.
*/

function diffArray(arr1, arr2) {
  
  var newArr = [];
  var arr1Len = arr1.length;
  var arr2Len = arr2.length;
  var temp;
  var index = 0;
  
  
  for(var i=0; i<arr1Len; i++) {
    temp = arr2.indexOf(arr1[i]);
    if(temp === -1) {
      newArr[index] = arr1[i];
      index++;
    }
  }
  
  
  for(i=0; i<arr2Len; i++) {
    temp = arr1.indexOf(arr2[i]);
    if(temp === -1) {
      newArr[index] = arr2[i];
      index++;
    }
  }
  
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);