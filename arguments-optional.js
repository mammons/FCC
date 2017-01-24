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