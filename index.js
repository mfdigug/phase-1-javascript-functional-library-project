function turnObjIntoArray(collection){
    return Object.values(collection)
}

function myEach(collection, callback){
    const newArray = turnObjIntoArray(collection);
    for(let i = 0; i < (newArray.length); i++) {
    callback(newArray[i])
    }
    return collection
}


function myMap(collection, callback){
    
    const newArray = turnObjIntoArray(collection);
    
    let mappedArray = [];

    for(let i = 0; i < (newArray.length); i++) {
     mappedArray.push(callback(newArray[i]))
    }

    return mappedArray
}

function myReduce(collection, callback, acc){
    let newArray = turnObjIntoArray(collection);
    if(!acc){
        acc = newArray[0]
        newArray = newArray.slice(1);
    }

     for(let i = 0; i < (newArray.length); i++) {
      acc = callback(acc, newArray[i], newArray);
  }
  return acc;
}


function myFind(collection, predicate){
       
    const newArray = turnObjIntoArray(collection);
    for(let i = 0; i < (newArray.length); i++) {
        if (predicate(newArray[i]))
            return newArray[i]
    }
    
}
        //predicate = cb that returns true or false
    //checks each value in collection and returns 1st that = true -> predicate.
    //returns a single value


function myFilter(collection, predicate){
     const newArray = turnObjIntoArray(collection);
     const filteredArr = [];
     for (let i = 0; i < newArray.length; i++) {
        if (predicate(newArray[i])) filteredArr.push(newArray[i]);
    }
    return filteredArr;
    
    //returns an array of all values that pass the predicate (or empy array)
}

function mySize(collection){
    const newArray = turnObjIntoArray(collection);
    return newArray.length

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