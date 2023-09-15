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


// create a new PolyFill map function
let arr1 = [6,7,8,9]
function myPolyFillMapAdd(arr2,cb){
    // create a new empty array
    let newArr = [];
    for(let i = 0;i<arr2.length;i++){
        newArr.push(cb(arr2[i]));
    }
    return newArr;
}

//callback function
function add(x){
    return x+x;
}

console.log(myPolyFillMapAdd(arr1,add))