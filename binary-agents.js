function binaryAgent(str) {

  var stringArray = str.split(" ");
  var characterCode;
  
  function convertBinaryToChar(binary){
    characterCode = 0;
    var twos = 1;
      for(var i = binary.length-1; i >= 0; i--){
          characterCode += (binary[i] * twos);
          console.log("charCode: " + characterCode + " twos: " + twos);
          twos *= 2;
    }
    return String.fromCharCode(characterCode);
  }
  var convertedStringArray = stringArray.map(convertBinaryToChar).join('');
  return convertedStringArray;

}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");