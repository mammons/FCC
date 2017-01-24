function repeatStringNumTimes(str, num) {
  if(num < 1) return "";
  var output ="";
  console.log("string: " + str);
  console.log("number: " + num);
for(var i = 0; i < num; i++){
  output += str;
} 

  console.log("output: " + str);
  return output;

}

repeatStringNumTimes("abc", 3);