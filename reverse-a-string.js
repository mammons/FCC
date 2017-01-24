function reverseString(str) {
  var strArray = str.split("");
  reversedString = strArray.reverse().join("");
  return reversedString;
}

reverseString("hello");