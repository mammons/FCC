function sumAll(arr) {
  var max = 0;
  var min = 0;
  var sum = 0;
  
  //max = arr[0] > arr[1] ? arr[0] : arr[1];
  if(arr[0] > arr[1]){
    max = arr[0];
    min = arr[1];
  }
  else{
    max = arr[1];
    min = arr[0];
  }
  
  sum = max;
  console.log("max = " + sum);
  
  while(max > min){
    sum += --max;
    console.log("sum = " + sum +" add= " + max);
  }
  console.log("value = " + sum);
  return sum;
}

sumAll([1, 4]);