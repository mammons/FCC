function sumPrimes(num) {
  
  var primeArray = [2];

  function isPrime(currentNum){
    for(var j = 2; j < currentNum; j++){
      if(currentNum % j === 0){ //if 
        return false;
      }
    }
          return true;
  }
  
  for(var i = 3; i <= num; i++){
    if(isPrime(i)){
      primeArray.push(i);
    }
  }
  
  console.log(primeArray);
  
  return primeArray.reduce(function(prev, curr){
     console.log("num: " + num + " current total: " + prev + " current prime value: " + curr);
    return prev + curr;
  });
    
}

sumPrimes(10);