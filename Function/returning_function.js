// you can also return a function within a function.

function greet(name){
    function displayName(){
        console.log("Hi " + " " + name);
    }

    return displayName;
}

const s1 = greet("Vivek")
console.log(s1)

s1()