Array.prototype.myMap = function(cb){
    //create a new array in map function
    let newArray = []
    for(let i = 0;i<this.length;i++){
        newArray.push(cb(this[i]))
    }
    return newArray;
}

// This method is defining a new method called myMap for the Array.prototype.The myMap method takes a callback function as an argument and applies it to each element of the array, creating a new array with the results.
// The method first creates a new empty array called newArray.It then loops through each element of the original array using a for loop, and applies the callback function to each element. The result of the callback function is then pushed into the newArray .
// Finally, the method returns the newArray with the results of the callback function applied to each element of the original array.

function square(x){
    return x*x;
}

let arr = [ 1,2,3, 4, 5]
let mappedArray = arr.myMap(square)
console.log(mappedArray)