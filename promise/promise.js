// Create a function that returns a promise
function dataFetch() {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const data = { message : "Data fetched successfully"}
            resolve(data);
        },2000);
    });
}

// Usage of the promise
dataFetch()
    .then((data)=>{
        // Output: Data fetched successfully
        console.log(data.message)
        // Perform additional operations with the fetched data
    })
    .catch((error)=>{
        // Handle any errors that occurred during the operation
        console.log("Error :" ,error);
    })