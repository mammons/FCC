function findLongestWord(str) {
  var wordArray = str.split(" ");
  wordArray.sort(function(a,b){
    return b.length - a.length;
  });
  return wordArray[0].length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");