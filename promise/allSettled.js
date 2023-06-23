let p1 = new Promise(function(resolve,reject){
    resolve("Promise 1 is resolve")
})
let p2 = new Promise(function(resolve,reject){
    reject("Promise 2 is rejected")
})
let p3 = new Promise(function(resolve,reject){
    resolve("Promise 3 is resolve")
})

Promise
    .allSettled([p1,p2,p3])
    .then((val)=>{
        console.log(val)
    })
    .catch((err)=>{
        console.log(err)
    })