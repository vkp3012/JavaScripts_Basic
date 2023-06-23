// A higher-order function is a function that takes one or more functions asP arguments, or returns a function as its result. Higher-order functions are a fundamental concept in functional programming, and they allow for more flexible and reusable code.

// In JavaScript, some examples of higher-order functions include:

// map(): This higher-order function is used to apply a function to each element of an array and return a new array with the results.

let arr = [1,2,3,4,5]
let mapArr = arr.map(function(x){
    return x*x;
})

console.log(mapArr)

// filter(): This higher-order function is used to filter out elements from an array that do not meet a certain condition, and return a new array with the filtered elements.

let filterArr = arr.filter(function(x){
    if (x%2 === 0 ){
        return x
    }
})

console.log(filterArr)

// reduce(): This higher-order function is used to reduce an array to a single value by applying a function to each element.

let reduceArr = arr.reduce(function(accumulator,x){
    return accumulator + x;
},0)

console.log(reduceArr)

// sort(): This higher-order function is used to sort an array based on a specified criteria.

const numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
numbers.sort();
console.log(numbers); // Output: [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]

// These are just a few examples of higher-order functions in JavaScript. Higher-order functions are a powerful tool for working with arrays and other data structures, and they can be used to create more concise, readable, and reusable code.