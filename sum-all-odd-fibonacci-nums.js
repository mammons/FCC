function sumFibs(num) {
  var fibnoochi = [1,1];
  var i = 1;
   
  while(fibnoochi[i] < num){
    fibnoochi.push(fibnoochi[i-1] + fibnoochi[i]);
    i++;
  }
  
  console.log(fibnoochi);
  
  return fibnoochi.reduce(function(prev, curr){
    if(curr % 2 > 0 && curr <= num){
      console.log("num: " + num + " current total: " + prev + " current odd value: " + curr);
      return prev + curr;
    }
    return prev;
  });
}

sumFibs(21);