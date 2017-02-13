// Return the number of total permutations of the provided string that don't have repeated consecutive letters. Assume that all characters in the provided string are each unique.

// For example, aab should return 2 because it has 6 total permutations (aab, aab, aba, aba, baa, baa), but only 2 of them (aba and aba) don't have the same letter (in this case a) repeating.

function permAlone(str){
    var chars = str.split(''),
        permutations = [],
        count = 0;

    var swap = function(array, pos1, pos2){
        var tmp = array[pos1];
        array[pos1] = array[pos2];
        array[pos2] = tmp;
        //console.log("now array looks like this: " + array);
    };
    
    var permutate = function(array, end){
        end = end || array.length;
        //console.log("end = " + end);
    if(end === 1){
        //console.log("OK now I'm pushing " + array + " onto permutations");
        permutations.push(array.join(''));
    } else {
      var j;
        for(var i = 1; i <= end; i++){
            permutate(array, end-1);
            if(end % 2){
                 j = 1;
            } else {
                 j = i;
            }
            swap(array, j-1, end-1);
        }
    }
    };
    
    var countUnique = function(array){
        var reg = /([a-z])\1/;
        array.forEach(function(el){
            //console.log("checking regex: " + el);
            if(!reg.test(el)){
                //console.log("test found this has no repeats: " + el);
                count++;
            }
        });
    };
    permutate(chars);
    countUnique(permutations);
    //console.log("Permutations: " + permutations + " and the number of uniqe permutations is: " + count);
    return count;
}

permAlone('aabb');