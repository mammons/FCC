//Fill in the object constructor with the following methods below:
//
//getFirstName()
//getLastName()
//getFullName()
//setFirstName(first)
//setLastName(last)
//setFullName(firstAndLast)
//Run the tests to see the expected output for each method.
//
//The methods that take an argument must accept only one argument and it has to be a string.
//
//These methods must be the only available means of interacting with the object.
//For some reason there is a requirement for this challenge that Object.keys(bob).length return 6 which is why I ended up having to do it  this way


//var Person = function(firstAndLast) {
//    this.setFullName(firstAndLast);
//};
//
//Person.prototype.getFirstName = function(){
//    return this.first;
//};
//
//Person.prototype.getLastName = function(){
//    return this.last;
//};
//
//Person.prototype.getFullName = function(){
//    return this.first + " " + this.last;
//};
//
//Person.prototype.setFirstName = function(newFirst){
//    if (typeof newFirst !== "string"){
//        return;
//    }
//    this.first = newFirst;
//};
//
//Person.prototype.setLastName = function(newLast){
//    if(typeof newLast !== "string"){
//        return;
//    }
//    this.last = newLast;
//};
//
//Person.prototype.setFullName = function(newFirstAndLast){
//    if(typeof newFirstAndLast !== "string"){
//        return;
//    }
//    var splitArr = newFirstAndLast.split(' ');
//    this.first = splitArr[0];
//    this.last = splitArr[1];
//};

//Fill in the object constructor with the following methods below:
//
//getFirstName()
//getLastName()
//getFullName()
//setFirstName(first)
//setLastName(last)
//setFullName(firstAndLast)
//Run the tests to see the expected output for each method.
//
//The methods that take an argument must accept only one argument and it has to be a string.
//
//These methods must be the only available means of interacting with the object.


var Person = function(firstAndLast) {
    var splitArr = firstAndLast.split(' ');
    var first = splitArr[0];
    var last = splitArr[1];

    this.getFirstName = function() {
        return first;
    };
    this.getLastName = function() {
        return last;
    };
    this.getFullName = function() {
        return first + " " + last;
    };
    this.setFirstName = function(newFirst) {
        if (typeof newFirst !== "string") {
            return;
        }
        first = newFirst;
    };
    this.setLastName = function(newLast) {
        if (typeof newLast !== "string") {
            return;
        }
        last = newLast;
    };
    this.setFullName = function(newFirstAndLast) {
        if (typeof newFirstAndLast !== "string") {
            return;
        }
        var splitArr = newFirstAndLast.split(' ');
        first = splitArr[0];
        last = splitArr[1];
    };
};

var bob = new Person('Bob Ross');
console.log(Object.keys(bob).length);
bob.getFullName();