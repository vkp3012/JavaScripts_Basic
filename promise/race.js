// let p1 = new Promise(function(resolve,reject){
//     // resolve("Promise 1 is resolve")
//     reject("Promise 1 is reject")
// })

// let p2 = new Promise(function(resolve,reject){
//     // resolve("Promise 2 is resolve")
//     reject("Promise 2 is reject")
// })

// let p3 = new Promise(function(resolve,reject){
//     resolve("Promise 3 is resolve")
// })

// Promise
//     .race([p1,p2,p3])
//     .then((val)=>{
//         console.log(val)
//     })
//     .catch((err)=>{
//         console.log(err)
//     })

let p1 = new Promise(function(resolve,reject){
    setTimeout(()=>{
        resolve("Promise 1 is resolve")
    },2000)
})

let p2 = new Promise(function(resolve,reject){
    setTimeout(()=>{
        resolve("Promise 2 is resolve")
    },1000)
})

Promise
    .race([p1,p2])
    .then((val)=>{
        console.log(val)
    })
    .catch((err)=>{
        console.log(err)
    })