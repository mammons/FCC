// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

function convertHTML(str) {
  // &colon;&rpar;
  
  var entObj = {
  	'&': '&amp;', 
  	'<' : '&lt;', 
  	'>' : '&gt;', 
  	'"' : '&quot;', 
  	"'" : '&apos;'
  }; //really just trying to get comfortable using objects 
  
  var entities = /[&<>"']/g;//regex of entities to match
  
  function replacer(match){
    return entObj[match];
  } 
  
  return str.replace(entities, replacer);
}

convertHTML("Dolce & Gabbana");
