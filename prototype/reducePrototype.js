Array.prototype.myReduce = function(cb,initialValue){
    let accumulator = initialValue;
    for(let i = 0;i<this.length;i++){
        if (accumulator){
            accumulator = cb.call(undefined,accumulator,this[i])
        }else{
            accumulator = this[i]
        }
    }
    return accumulator;
}

// This method is a higher-order function that takes two arguments: a callback function cb and an optional initial value initialValue. The method then iterates over the array this and applies the callback function to each element of the array.

// The callback function takes four arguments: the current accumulator value, the current element of the array, the index of the current element, and the entire array this. The callback function can return any value, which will be used as the new accumulator value for the next iteration.

// If an initial value is provided, it is used as the initial accumulator value. If no initial value is provided, the first element of the array is used as the initial accumulator value.

// The method returns the final accumulator value after iterating over all elements of the array.

// using our own reduce method
// const arr = [1, 2, 3, 4];

let arr = [1,2 ,3,4,8,16,7]
console.log(arr.myReduce((total, elem) => total + elem));