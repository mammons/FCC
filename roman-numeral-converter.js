function convertToRoman(num) {
  
  var decimalArr = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var romanNumeralArr= ['M', 'CM', 'D', 'CD', 'C', 'XC','L','XL','X','IX','V','IV','I'];
  
  //filter out the numbers in the array that are already greater than the num to be converted
  var filteredDecimalArr = decimalArr.filter(function(e){ return num >= e;  });
  var filteredRomanArr = romanNumeralArr.slice(decimalArr.indexOf(filteredDecimalArr[0]));
  var romanReturn = "";
  var runningTotal = num;
  
  filteredDecimalArr.forEach(function(e, i){
    console.log("filteredDecimalArr: " + filteredDecimalArr);
    console.log("runnign total: " + runningTotal);
    console.log("filteredRomanArr: " + filteredRomanArr);
    while(runningTotal >= e){
      runningTotal -= e;
      romanReturn += filteredRomanArr[i];
    }
  });
  
  return romanReturn;
  
}

convertToRoman(36);