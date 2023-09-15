
// Promise in JS are awy to handle asynchronous operation.
// promise represent a value that may not be available yet but will be available at a same point in the feature.

function dataFetch(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const data = { 
                message : `Data Fetched Successfully`
            }
            resolve(data);
        },2000)
    })
}

dataFetch()
    .then((data)=>{
        console.log("===>",data.message)
    })
    .catch((err)=>{
        console.log("===>",err)
    })


const testPromise = new  Promise((resolve,reject) => {
    let value = 3
    if(value < 5){
        resolve(`Value is less than ${value}`)
    }else{
        reject(`value is greater than ${value}`)
    }
})

testPromise
    .then((result)=>{
        console.log(`===>`, result)
    })
    .catch((err)=>{
        console.log("===>",err)
    })


