// Given an array arr, find element pairs whose sum equal the second argument arg and return the sum of their indices.

// If multiple pairs are possible that have the same numeric elements but different indices, return the smallest sum of indices. Once an element has been used, it cannot be reused to pair with another.

// For example pairwise([7, 9, 11, 13, 15], 20) returns 6. The pairs that sum to 20 are [7, 13] and [9, 11]. We can then write out the array with their indices and values.

// Index	0	1	2	3	4
// Value	7	9	11	13	15
// Below we'll take their corresponding indices and add them.

// 7 + 13 = 20 → Indices 0 + 3 = 3
// 9 + 11 = 20 → Indices 1 + 2 = 3
// 3 + 3 = 6 → Return 6

//v.1 
// function pairwise(arr, arg) {
//   var workingArr = arr;
//   var diffArr = workingArr.map(function(number){
//       return arg-number;
//   });
//   var indexArr = [];
  
//   workingArr.forEach(function(el, i){
//       var matchIndex = workingArr.indexOf(diffArr[i]);
//     if(matchIndex > -1){
//         indexArr.push(i);
//         //indexArr.push(matchIndex);
//     }  
//   });
//   console.log(indexArr.reduce((prev, curr) => prev + curr, 0));
// }

function pairwise(arr, arg) {
  var workingArr = arr;
  var indexArr = [];
  var seent = {};
  
  workingArr.forEach(function(el, i, ar){
      
     var matchingIndex = ar.slice(i+1).map(function(num){return arg-num;}).indexOf(el);
     
    if( matchingIndex > -1 && !seent.hasOwnProperty(i)){
     indexArr.push(i);
     indexArr.push(matchingIndex + i+1);
     seent[i] = true;
     seent[matchingIndex + i+1] = true;
    }
  });
 
  var cleanArr = removeDups(indexArr);
  console.log(cleanArr);
 console.log(cleanArr.reduce((prev, curr) => prev + curr, 0));
  return cleanArr.reduce(function(prev, curr){ return prev + curr;},0);
  
}

function removeDups(a){
        var seen = {};
    return a.filter(function(item) {
        return seen.hasOwnProperty(item) ? false : (seen[item] = true);
    });
}

pairwise([1,4,2,3,0,5], 7);
pairwise([1, 3, 2, 4], 4);
pairwise([1, 1, 1], 2);
pairwise([0, 0, 0, 0, 1, 1], 1);
pairwise([], 100);