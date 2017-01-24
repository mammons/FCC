function sym(args) {
  var currentArray = arguments[0];
  var argIndex = 1;
  var argArray = Array.from(arguments);
  
  //probably weird to have the return at the top of the function but I made filterArray so I could use it recursively by shoving the array created from filtering two arguments at a time back into it with the next array argument if there is one
  return filterArray(currentArray, arguments[1]);

  
  //filterArray takes two arrays and filters out elements that appear in both arrays thereby leaving you with an array of unique digits. It does this by finding the unique digits in the first array and the unique digits in the second array and then concatenating the two resulting arrays
  function filterArray(arr1, arr2){
      var leftArray, rightArray;
    //leftArray is an array of unique digits from the arr1 argument
      leftArray = arr1.filter(function(el){
        return arr2.indexOf(el) === -1;
      });
    //rightArray is an array of unique digits from the arr2 argument
      rightArray = arr2.filter(function(el){
        return arr1.indexOf(el) === -1;
      });
    //cramming all the unique digits togeter into one array
      currentArray = leftArray.concat(rightArray);

console.log("currentArray " + currentArray + " argIndex: " + argIndex + " length: " + arguments.length);
    //if there's another argument array that we haven't run through the filter yet then increment the index and run the currentArray through filterArray again with the next array argument
    if(argIndex < argArray.length - 1){
      argIndex++;
      filterArray(currentArray, argArray[argIndex]);
    }

    //this filters out duplicate elements in the resulting array
      return currentArray.filter(function(el, i){
        return el !== currentArray[i+1];
      });

  }

}

sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]);
