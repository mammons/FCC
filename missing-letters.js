// Find the missing letter in the passed letter range and return it.

// If all letters are present in the range, return undefined.

function fearNotLetter(str) {
  var littleCharCodeArray = [];
  var charCode = 97; //little a character code
  var stringIndex = 0 ;
   
  
  while(str.charCodeAt(stringIndex) === charCode){
    stringIndex++;
    charCode++;
  }
  console.log(String.fromCharCode(charCode));
  if(charCode > 97) return String.fromCharCode(charCode);
  return undefined;
  
}

fearNotLetter("abce");