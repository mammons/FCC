function dropElements(arr, func) {
  // Drop them elements.
  var index = arr.findIndex(func);
  if(index > -1) { return arr.slice(index);}
  return [];
  //indexOf returns -1 if none of the elements meet the condition. in this case we just return an empty array.
}

dropElements([1, 2, 3, 4], function(n) {return n >= 3; });