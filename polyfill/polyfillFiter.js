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

function isEven(x){
    if(x%2===0){
        return x
    }
}

console.log(myPolyFillFilter(arr,isEven))