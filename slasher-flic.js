function slasher(arr, howMany) {

  
  while(howMany > 0){
    arr.shift();
    howMany--;
  }
  
return arr;
  
}

slasher([1, 2, 3], 2);