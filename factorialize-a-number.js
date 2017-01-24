
function factorialize(num) {
  var i = num;
  var val = num;
  
  if(num === 0) return 1;
  
  while(i > 1){
    val *= i-1;
    i--;
  }
  return val;
}

factorialize(5);