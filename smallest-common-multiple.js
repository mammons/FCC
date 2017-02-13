// Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

// The range will be an array of two numbers that will not necessarily be in numerical order.

// e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that is evenly divisible by all numbers between 1 and 3.

function smallestCommons(arr) {
  arr.sort( function(a,b){ return b-a;});
  var counter, maxMultiple, allFactors = [];
  var minMultiple = 0;
  
counter = arr[0];
  while(counter >= arr[1]){
    allFactors.push(counter);
    counter--;
  }
  
//  console.log(" allFactors: " + allFactors);
  
  var i;
  counter = 1; //reset counter so we can use it to check the multiples
  do{
//    console.log("counter: " + counter);
    minMultiple = allFactors[0] * allFactors[1] * counter;
//    console.log("result: " + minMultiple);
      for(i = 2; i < allFactors.length; i++){
        if(minMultiple % allFactors[i] !== 0){
//          console.log(minMultiple + " is not a multiple of Factor: " + allFactors[i]);
          break;
        }
      }
    counter++;
  }while(i !== allFactors.length);
  
  return(minMultiple);
 
  
}


smallestCommons([1,5]);