function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  
  return str.replace(/([A-Z])|([\s_])|([a-z](?=[A-Z]))/g, function(match, p1, p2, p3){
    if(p1)
      return match.toLowerCase();

    if(p2)
      return '-';

    if(p3)
      return match + '-';
  });
  
  
}

spinalCase('thisIsSpinalTap');