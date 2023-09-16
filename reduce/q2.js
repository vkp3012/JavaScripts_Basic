var pets = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit','rabbit'];

const petCount = pets.reduce(function(obj,pet){
    if(!obj[pet]){
        obj[pet] = 1
    }else{
        obj[pet]++;
    }

    return obj;
},{})

console.log(petCount);