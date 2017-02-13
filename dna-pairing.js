// The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

// Base pairs are a pair of AT and CG. Match the missing element to the provided character.

// Return the provided character as the first element in each array.

// For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

// The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

function pairElement(str) {
  var DNArray = [];
  var i = 0;
  
  while(i < str.length){
    console.log("str " + str + " str i = " + str[i]);
    switch(str[i]){
        
      case ('A'):
        DNArray.push(['A', 'T']);
        break;
      case('T'):
        DNArray.push(['T', 'A']);
        break;
      case('G'):
        DNArray.push(['G', 'C']);
        break;
      case('C'):
        DNArray.push(['C', 'G']);
        break;    
      default:
        break;
    }
    console.log("DNArray: " + DNArray);
    i++;
  }
  return DNArray;
      
}

pairElement("GCG");