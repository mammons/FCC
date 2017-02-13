// Return the factorial of the provided integer.

// If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

// Factorials are often represented with the shorthand notation n!

// For example: 5! = 1 * 2 * 3 * 4 * 5 = 120


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