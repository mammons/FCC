// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

function diffArray(arr1, arr2) {
  var newArr = [];
  var matchIndex = 0;

  console.log("arr1: " + arr1 + " arr2: " + arr2 );

  for(var i = 0; i < arr1.length; i++){
    console.log("checking " + arr1[i] + " against array: " + arr2);
    matchIndex = arr2.indexOf(arr1[i]);
    console.log("matchIndex: " + matchIndex);
    if(matchIndex === -1){
      newArr.push(arr1[i]);
      console.log("pushed onto newArr which is now: " + newArr);
    }
    else{
       console.log("cutting " + arr2[matchIndex] + " out of index position: " + matchIndex + " arr2: " + arr2);
      arr2.splice(matchIndex, 1);
      console.log("arr2 is now : " + arr2);
     
    }
  }
  
  console.log("newArr is: " + newArr + " arr2 is " + arr2 + ". concatentating");
  
  newArr = newArr.concat(arr2);
  
  console.log("Final newArr: " + newArr);
  return newArr;
}


diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);