// One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

// A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

// Write a function which takes a ROT13 encoded string as input and returns a decoded string.

// All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

function rot13(str) { // LBH QVQ VG!
  
//I want to build a dictionary so this array
  //is supposed to have a key value pair for all of the capital letters
  
  var cipherArray = [];
  
  for(var i = 0; i < 13; i++){
      var pairArray = [i + 65, i + 78];
      cipherArray.push(pairArray);
      pairArray = [90 - i, 77 - i];
      cipherArray.push(pairArray);
    }

  console.log(cipherArray);

//The argument string split into an array
var strArrayToBeBroken = str.split(" ");
console.log("strArrayToBeBroken: " + strArrayToBeBroken);
  
  //iterating over the encrypted string array using map. the idea is to take each encrypted word and convert it with the cipher
  //array then put it into the convertedStringArray
var convertedStringArray = strArrayToBeBroken.map(function(word){
  var charCodedWord = " "; //this will be the resulting converted word in charcode
  var convertedChar; //converted char after we've found the encrypted char in the cipher array
  
  for(var i = 0; i < word.length; i++){ //iterate over each letter in the encrypted word
    var encryptedChar = word.charCodeAt(i); //getting the encrypted character
    console.log("encryptedChar " + encryptedChar);
    convertedChar = encryptedChar;
    for(var j = 0; j < cipherArray.length; j++){ //iterating over teh cipher array with the encrypted letter
      if(cipherArray[j][0] === encryptedChar){ //if we find a key match we return the value which is its decoded letter
        convertedChar = cipherArray[j][1];
      }
    }
    console.log("convertedChar " + convertedChar);
    charCodedWord += String.fromCharCode(convertedChar);    
  }
  
  charCodedWord.trim();
  console.log("charCodedWord: " + charCodedWord);
  return charCodedWord;
});

  console.log("convertedStringArray: " + convertedStringArray.join(""));
return convertedStringArray.join("").trim();
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");