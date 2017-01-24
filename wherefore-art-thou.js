function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  var wtf = true;
  collection.forEach(function(obj){
    
    for(var key in source){
      for(var prop in obj){
      if(obj.hasOwnProperty(key)){
        console.log("object has prop:" + key);
        console.log("Does " + obj[key] + " match " + source[key]);
        if(obj[key] == source[key]){
          console.log("YES");
        continue;
        }
        console.log("NO. breaking");
        wtf = false;
        break;
      }
        else{
          wtf = false;
          break;
        }
      }
    }
      if(wtf){
        arr.push(obj);
      }else{
        wtf = true;
      }
  });
  
  // Only change code above this line
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
