function chunkArrayInGroups(arr, size) {
  
  console.log("Array: " + arr);
  console.log("Size: " + size);
  var outArray = [];
  for(var i = 0; i < arr.length; i+=size){
    
    /*if(i+size === undefined){
      console.log("i+size is oob");
      return outArray.push(i, arr.length);
    }*/
    var slicedArray = arr.slice(i, i + size);
    console.log("sliced array" + slicedArray);
  outArray.push(slicedArray);
  }
  console.log("we're done: " + outArray);
  return outArray;
  
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);