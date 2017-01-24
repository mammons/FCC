function translatePigLatin(str) {
  var vowels = ['a','e','i','o','u'];
  
  function vowelAt(str){
    var i = 0;
    while(i < str.length){
      if(vowels.indexOf(str[i]) > -1) return i;
      i++;
    }
  }
  
  var firstVowel = vowelAt(str);
  
  console.log("first vowel index for: " + str + " is " + firstVowel);
  if(vowels.indexOf(str.substring(0,1)) > -1){
     return str + "way";
     }
  else{
    console.log(str.substring(firstVowel) + str.substring(0,firstVowel) + "ay");
    return str.substring(firstVowel) + str.substring(0,firstVowel) + "ay";
  }
}

translatePigLatin("consonant");