// Drop the elements of an array (first argument), starting from the front, until the predicate (second argument) returns true.

// The second argument, func, is a function you'll use to test the first elements of the array to decide if you should drop it or not.

// Return the rest of the array, otherwise return an empty array.

function dropElements(arr, func) {
  // Drop them elements.
  var index = arr.findIndex(func);
  if(index > -1) { return arr.slice(index);}
  return [];
  //indexOf returns -1 if none of the elements meet the condition. in this case we just return an empty array.
}

dropElements([1, 2, 3, 4], function(n) {return n >= 3; });