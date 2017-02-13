// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

// For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

function titleCase(str) {
  return str.toLowerCase().split(" ").map(function(val){
    return val[0].toUpperCase() + val.substr(1);
  }).join(" ");
  
}

titleCase("I'm a little tea pot");