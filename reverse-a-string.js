// Reverse the provided string.

// You may need to turn the string into an array before you can reverse it.

// Your result must be a string.

function reverseString(str) {
  var strArray = str.split("");
  reversedString = strArray.reverse().join("");
  return reversedString;
}

reverseString("hello");