// Closure means that an inner function always has access to the variable its outer function even after the outer function has returned.

function outerFunction(){
    var greeting = "Vivek";
    function innerFunction(){
        console.log("Hi" + " " + greeting)
    }
    return innerFunction;
}

const innerFun = outerFunction()
console.log(innerFun)  //return a function 
console.log(innerFun()) //return a value


// Explain
// 1. outerFunction is called, it returns the function definition of innerFunction.
// 2. innerFun is a reference to the innerFunction().
// 3. innerFun() is called, it still has access to the outerFunction().
// 4. When we run console.log(innerFun), it returns the function Definition. 
// 4. When we run console.log(innerFun()), it returns the innerFunction() value.

// another example:

function calculation(x){
    function multiply(y){
        return x * y;
    }

    return multiply;
}

const multiply1 = calculation(3)  //Closure
const multiply2 = calculation(4)    //closure

console.log(multiply1);
console.log(multiply1());
console.log(multiply1(6));
// console.log(multiply1(2));
console.log(multiply2(2));

// Explain
// 1. The calculation() function takes a single argument x and returns the function definition of the multiply() function.
// 2. The multiply() function takes a single argument y and return x*y.
// 3. Both multiply1 and multiply2 are closures.
// 4. The calculation() function is called passing a parameter x.
// 5. when multiply1(6) and multiply2(2) are called, the multiply() function has access to the passed x argument of the outer function calculation() function.

