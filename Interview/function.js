// Normal Function
function mul(a,b){
    return a * b;
}

console.log(mul(2,8))

// function constructor
const function1 = new Function("a","b", "return a*b")
console.log(function1(2,2))

// function Expression
const fun1 = function(a,b){
    return a * b
}
console.log(fun1(3,4))

// Arrow Function
const fun2 = (a,b) => {
    return a*b
}

console.log(fun2(3,5))