// Return the length of the longest word in the provided sentence.

// Your response should be a number.

function findLongestWord(str) {
  var wordArray = str.split(" ");
  wordArray.sort(function(a,b){
    return b.length - a.length;
  });
  return wordArray[0].length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");