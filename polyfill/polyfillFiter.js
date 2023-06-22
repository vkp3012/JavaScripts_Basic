// filter arr
let arr = [1,2,3,4,8,10,16,18]

let filterArr = arr.filter(function(x){
    return x%2===0;
})

// console.log(filterArr)

// custom polyfill of filter arr.
function myPolyFillFilter(arr,cb){
    let newArr = [];
    for (let i= 0 ;i<arr.length;i++){
        if(cb(arr[i])){
            newArr.push(arr[i]);
        }
    }

    return newArr;
}


// This method is creating a new array called newArr by iterating over an existing array called arr. For each element in arr, it checks if the callback function cb returns true for that element. If it does, the element is added to the newArr. Finally, the newArr is returned, containing only the elements that passed the callback function's test.

function isEven(x){
    if(x%2===0){
        return x
    }
}

console.log(myPolyFillFilter(arr,isEven))