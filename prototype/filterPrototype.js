Array.prototype.myFilter = function(cb){
    let newArray = [];
    for(let i = 0;i<this.length;i++){
        if(cb(this[i])){
            newArray.push(this[i])
        }
    }
    return newArray;
}

// This method is defining a new method called myFilter on the Array.prototype object. The myFilter method takes a callback function as an argument and returns a new array with all elements that pass the test implemented by the provided function.

// The method works by iterating over each element in the array and calling the callback function with that element as its argument. If the callback function returns a truthy value, the element is added to a new array called newArray. Once all elements have been checked, the newArray is returned.

function isEven(x){
    return x%2 === 0;
}

let arr = [1,2 ,3,4,8,16,7]
let filterArr = arr.myFilter(isEven)
console.log(filterArr)