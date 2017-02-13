// Flatten a nested array. You must account for varying levels of nesting.

function steamrollArray(arr) {
  // I'm a steamroller, baby
  var flatArray = [];
  
  function steamroll(el){
    if(!Array.isArray(el)){
      flatArray.push(el);
    }
    else{
      for(var val in el)
      steamroll(el[val]);
    }
  }
  
  arr.forEach(steamroll);
  
  return flatArray;
}

steamrollArray([1, [2], [3, [[4]]]]);