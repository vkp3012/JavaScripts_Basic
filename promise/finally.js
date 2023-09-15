var loader = true

function test(){
    return new Promise(function(resolved,reject){
        let a = 1+1;
        if(a === 2){
            resolved("promise resolved Yes!");
        }else{
            reject('promise rejected NO!');
        }
    })
}

test()
    .then((val)=>{
        console.log(val)
    })
    .catch((error)=>{
        console.log(error)
    })
    .finally(()=>{
        loader = false;
    })