function myEach(Collection, callback){

    //collection = object or array
    //determine whether the collection is an object or an array and, if it's an object, use a JavaScript Object method to create an array that contains the object's values. You then only need to write code that processes an array
    //e.g. if(collection = object){
    //object.keys...
    //}
    //iterates over collection, passing each element to the callback
    //return the original collection
}

function myMap(collection, callback){
    //collection = obj or array
    //pass each element to cb and create a new array that doesn't modify the original
    //remember to initiate new variable to store new array
    //return = new array
}

function myReduce(collection, callback, acc){
    //collection = obj or array
    //iterates through collection and boils it down to a single value.
    //acc starts at the value that's passed in as arg and is updated to return value of cb. If start value is not passed, use first value in collection
    //cb receives 3 values - current acc, current element in collection and ref to entire collect4ion
    //returns a single value
}

function myFind(collection, predicate){
    //collection = obj or array
    //predicate = cb that returns true or false
    //checks each value in collection and returns 1st that = true -> predicate.
    //returns a single value
}

function myFilter(collection, predicate){
    //collection = obj or array
    //predicate = cb that returns true or false
    //checks each value in the collection
    //returns an array of all values that pass the predicate (or empy array)
}

function mySize(collection){
    //collection = obj or array
    //return an integer - number of values in the collection (e.g. array.length)
}

//ARRAY FUNCTIONS

function myFirst(array, [n]){
    //[n]=an integer(optional)
    //return - a single element or an array
    // return first element of an array
    //passing 'n' (e.g.3) will return the first 'n' (e.g. 3) elements of the array
}

function myLast(array,[n]){
    //reverse of above
}