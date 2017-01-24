
function palindrome(str) {
  // Good luck!
  console.log("Original string: " + str);
  var strippedString = str.replace(/[\W_]+|\s+/gi, "").toLowerCase();
  console.log("Stripped String: " + strippedString);
  var reversedString = strippedString.split("").reverse().join("");
  console.log("Reversed, stripped string: " + reversedString);
  
  return strippedString === reversedString;
}



palindrome("eye");