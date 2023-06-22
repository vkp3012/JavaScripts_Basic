// map function
let arr = [1,2,3,4,5]
let mappedArray = arr.map(function(x){
    return x*x;
})

console.log(arr)
console.log(mappedArray)

// custom map function
function myPolyFillMap(arr,cb){
    let newArray = [];
    for (let i=0 ;i<arr.length;i++){
        newArray.push(cb(arr[i]))
    }
    return newArray;
}

function square(x){
    return x*x
}

console.log(myPolyFillMap(arr,square))