// 1. way to print in js
// console.log("Hello Word");
// alert("hello");
document.write("This is a JS")


// 2. Js Console Api
console.log("Hello Word");
console.warn("this is waring");
console.error("this is error");

// 3. JS variable
// What are Variable ? - Containers store data values
var number1 = 54
var number2 = 46
console.log(number1+number2)

// 4. Data Types in Js
/* 
At a very high level, there are two types of  data types in Js .
    1. Primitive Data Type : number, null, undefined, string, boolean, symbol
    2. Reference data types : Arrays and Objects
*/

// number
var num1 = 345
var num2 = 56.67

// string
var str1 = "This is a String"
var str2 = 'This is also a String'

// Boolean
var a = true
var b = false
console.log(a, b)

// undefined

// var und = undefined
var und
console.log(und)

// null
var n = null
console.log(n)

// object
var marks = {
    Ravi : 45,
    Vikash : 56,
    vivek : 35
}

console.log(marks)

// Array
var array = [1,2,3,4,5,"Vivek",true]
console.log(array)

// Operators in JS
// Arithmetic Operation
var a = 35
var b = 45
console.log("The value of a + b is :", a + b) 
console.log("The value of a - b is :", a - b) 
console.log("The value of a * b is :", a * b) 
console.log("The value of a / b is :", a / b) 

// Assignment operators
var c = b
c += 2
console.log(c)

// Comparison Operators
var x = 35
var y = 45
console.log(x == y)
console.log(x <= y)
console.log(x >= y)

// logical operators
// and operators
console.log(true && true)
console.log(false && true)
console.log(true && false)
console.log(false && false)

// or operators
console.log(true || true)
console.log(false || true)
console.log(true || false)
console.log(false || false)

// not operators
console.log(!false)
console.log(!true)

// Function JavaScripts
// DRY : Do not repeat Yourself

function avg(a,b){
    c = (a+b)/2;
    return c
}

var c1 = avg(4,6)
console.log(c1)

// conditional in Js
var age = 17
// single if statement

if( age > 11){
    console.log("You are not Kid")
}

// if - else Statement
if(age > 11){
    console.log("you can drink")
}else{
    console.log("You are Kid")
}

// if-else ladder
if(age > 12){
    console.log("You are not Kid and only drink in Cold drink.")
}else if(age > 16){
    console.log("You are a men and you can drink")
}else{
    console.log("You are Kid")
}

// for loop
var arr = [ 1, 2, 3, 4, 5, 6, 7]
console.log(arr)
for(var i = 0; i<arr.length;i++){
    console.log(arr[i])
}

// foreach Loop
arr.forEach(function(element){
    console.log(element)
})

// while loop
let j = 0;
while(j < arr.length){
    console.log(arr[j]);
    j++;
}