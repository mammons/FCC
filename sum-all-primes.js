// Sum all the prime numbers up to and including the provided number.

// A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.

// The provided number may not be a prime.

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