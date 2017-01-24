function findElement(arr, func) {
  
  var newArr = arr.filter(arguments[1]);
  
  return newArr[0];
}

findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; });