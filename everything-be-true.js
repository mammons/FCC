// Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

// Remember, you can access object properties through either dot notation or [] notation.

function truthCheck(collection, pre) {
  var truthy = true;
  for(var element in collection){
    console.log("pre: " + pre + " element " + collection[element][pre]);
    if(!Boolean(collection[element][pre])) truthy = false;
  }
  
  return truthy;

}

truthCheck([{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age");