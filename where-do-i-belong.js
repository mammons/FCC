function getIndexToIns(arr, num) {
  arr.sort(function(a,b){
    return a-b;
  });
  console.log("arr: " + arr + " length " + arr.length );
  
  for(var i = 0; i < arr.length; i++){
    if(num <= arr[0]){
      return 0;
    }
    else if(arr[arr.length - 1] <= num){
      return arr.length;
    }
    else if(arr[i] < num && num <= arr[i+1]){
          i++;
          return i;
        }
     }

}

getIndexToIns([40, 60], 50);