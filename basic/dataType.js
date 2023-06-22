/* There are two types of data type
    1. Primitive Data Types : - There are seven data type i.e number, String, Boolean, null, undefined , bigInt and Symbol
    2. Non-Primitive Data Types : - There are two types of data type i.e Object and Array.
*/

// 1. Number : The number type represents both integer and floating point numbers.
const number = 12334
console.log(number)
console.log( "not a number" / 2 )
console.log(NaN**3)
console.log(NaN**0)

/*
2. string : A string in JavaScript must be surrounded by quotes.
        In JavaScript, there are 3 types of quotes.

        Double quotes: "Hello".
        Single quotes: 'Hello'.
        Backticks: `Hello`.
        
    Double and single quotes are “simple” quotes. 
    There’s practically no difference between them in JavaScript.

    Backticks are “extended functionality” quotes. They allow us to embed variables and expressions into a string by wrapping them in ${…}, 
    for example

*/

const String = "Hello JavaScripts"
console.log(String)

let name = "John";

// embed a variable
console.log( `Hello, ${name}!` ); // Hello, John!

// embed an expression
console.log( `the result is ${1 + 2}` ); // the result is 3

// 3. Boolean : The boolean type has only two values: true and false.
const Boolean = true
console.log(Boolean)

// 4. null : It’s just a special value which represents “nothing”, “empty” or “value unknown”.
const nullType = null
console.log(nullType)

// 5. undefined : The meaning of undefined is “value is not assigned”.
let age;
console.log(age)

// 6. bigInt : In JavaScript, the “number” type cannot safely represent integer values larger than (253-1) (that’s 9007199254740991), or less than -(253-1) for negatives.
console.log(9007199254740991 + 1); // 9007199254740992
console.log(9007199254740991 + 2); // 9007199254740992


// 7. Object: - objects are used to store collections of data and more complex entities.
const obj = {
    "name" : "Vivek",
    "age" : 20,
    "city" : "Bangalore",
    "country" : "India",
    "isMarried" : false,
    "isSingle" : true,
}

console.log(obj)

// 8. Array 

const array = [1,2,3,4,5]
console.log(array)


// example
let name1 = "Ilya";

console.log( `hello ${1}` ); // ?
console.log( `hello ${"name1"}` ); // ?
console.log( `hello ${name1}` ); // ?