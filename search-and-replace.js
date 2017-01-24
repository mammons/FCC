function myReplace(str, before, after) {
  var newAfter = after;
  if(before.substring(0,1) === before.substring(0,1).toUpperCase()){
   newAfter = after.substring(0,1).toUpperCase() + after.substring(1);
  }
  
  console.log("str= " + str.replace(before, after));
  return str.replace(before, newAfter);
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");