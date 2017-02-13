// Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

// For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

// Calling this returned function with a single argument will then return the sum:

// var sumTwoAnd = addTogether(2);

// sumTwoAnd(3) returns 5.

// If either argument isn't a valid number, return undefined.

function addTogether() {
  
  var argLength = arguments.length;
  var firstArg = arguments[0];
  var numbers = true;

  function checkForNum(num){
    for(var arg in arguments){
       if(typeof arguments[arg] !== 'number'){
         console.log("arg: " + arguments[arg] + " is not a number");
         return false;
       } 
      else{
        return true;
      }
    }
  }
  
    if(argLength > 1){
      if(checkForNum(arguments[0]) && checkForNum(arguments[1])){
        return arguments[0] + arguments[1];
      }
    }
  else{
    if(checkForNum(firstArg)){
  
    return function(arg2) {
       if(checkForNum(arg2))
      return firstArg + arguments[0];
    };
  }
    return;
  }

}

addTogether("http://bit.ly/IqT6zt");