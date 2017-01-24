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