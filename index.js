const standardizeInput = function (collection) {
    return (collection instanceof Array) ? collection.slice() : Object.values(collection)
}

// instanceof looks at the collection to see if it's an Array, then it slice returns a shallow copy of the array, if falsey, then returns the values of the object pairs


function myEach(collection, callback) {
    let newCollection = standardizeInput(collection)
    //checks if it's an array or object then returns it- if it's an object, then it turns it into an array


    for (let i = 0; i < newCollection.length; i++) {
        callback(newCollection[i])
    }
    return collection
}


function myMap(collection, callback) {
    let newCollection = standardizeInput(collection)
    let newMappedArray = []

    for (let i = 0; i < newCollection.length; i++) {
        newMappedArray.push(callback(newCollection[i]))
    }
    return newMappedArray

}

//Instructor-provided solution
// const myReduce = function (collection, callback, acc) {
//     let newCollection = standardizeInput(collection);
//     if (!acc) {
//         acc = newCollection[0];
//         newCollection = newCollection.slice(1);
//     }

//     const len = newCollection.length;

//     for (let i = 0; i < len; i++) {
//         acc = callback(acc, newCollection[i], newCollection);
//     }
//     return acc;
// }

// My solution

function myReduce(collection, callback, acc) {
    let newCollection = standardizeInput(collection)
    // acc ? results = acc : results = newCollection[0];
    if (!acc) {
        acc = newCollection[0]
        newCollection = newCollection.slice(1)
    }
    // console.log(acc)
    for (let i = 0; i < newCollection.length; i++) {

        acc = callback(acc, newCollection[i], newCollection)
        // console.log("ACC in the FOR loop " + acc)
    }
    return acc
}

// const callback = (acc, val, collection) => (acc + (val * 3))
// myReduce([1, 2, 3, 4], callback, 10)

function myFind(collection, predicate) {
    let newCollection = standardizeInput(collection)

    for (const element of newCollection) {
        if (predicate(element)) {
            return element
        }
    }
}

function myFilter(collection, predicate) {
    let newCollection = standardizeInput(collection)

    let results = []

    for (const element of newCollection) {
        if (predicate(element)) {
            results.push(element)
        }
    }
    return results

}



function mySize(collection) {
    let newCollection = standardizeInput(collection)

    let counter = 0;

    for (let i = 0; i < newCollection.length; i++) {
        counter++
    }
    return counter

}



function myFirst(collection, n = false) {
    let newCollection = standardizeInput(collection)

    if (n) {
        return newCollection.slice(0, n)
    } else {
        return newCollection[0]
    }

}

function myLast(collection, n = false) {
    let newCollection = standardizeInput(collection)

    if (n) {
        return newCollection.slice(newCollection.length - n, newCollection.length)
    } else {
        return newCollection[newCollection.length - 1]
    }
}


// Don't use the top function, not applicable here, and we know they will be referring to objects

let obj = {
    a: 1,
    b: 2,
    c: 3,
    d: 4
}
function myKeys(obj) {

    const keys = []

    // use a for loop to get a key within the object
    for (let key in obj) {

        keys.push(key)

    }
    return keys
}

function myValues(obj) {
    const values = []

    // use a for loop to get a key within the object
    for (let key in obj) {

        values.push(obj[key])

    }
    return values

}