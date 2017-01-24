function uniteUnique(arr) {
  var uniqueArr = arguments[0];
  
  function uniquify(el, i){
    if(uniqueArr.indexOf(el) === -1){
        uniqueArr.push(el);
      }
  }
  
  for(var i = 1; i < arguments.length; i++){
    arguments[i].forEach(uniquify);
  }
  return uniqueArr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);