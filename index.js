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

function myFirst(array, n){
    if(!n) {return array[0]}
    else {return array.slice(0,n)}
}

function myLast(array,n){
    if(!n) {return array[array.length-1]}
    else {return array.slice(array.length-n)}
}

function myKeys(object){
    const arrayOfKeys = [];
    for (let key in object){
    arrayOfKeys.push(key);
  }
  return arrayOfKeys;
}

function myValues(object){
    const arrayOfValues = [];
    for (let key in object){
    arrayOfValues.push(object[key]);
  }
  return arrayOfValues;
}