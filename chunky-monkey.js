// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

function chunkArrayInGroups(arr, size) {
  
  console.log("Array: " + arr);
  console.log("Size: " + size);
  var outArray = [];
  for(var i = 0; i < arr.length; i+=size){
    var slicedArray = arr.slice(i, i + size);
    console.log("sliced array " + slicedArray);
  outArray.push(slicedArray);
  }
  console.log("we're done: " + outArray);
  return outArray;
  
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);