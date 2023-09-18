// const obj = {
//     name : "Vivek",
//     lastName : "Patel",
//     greet : function(){
//         console.log(this.name)
//     }
// }
// // create a object

// const { subtract } = require("lodash");

// const person = {};
// person.firstName = "John";
// person.lastName = "Doe";
// person.age = 50;
// person.eyeColor = "blue";
// console.log(person)

// console.log(obj)
// console.log(obj.name) //vivek
// console.log(obj.lastName) //patel
// console.log(obj.greet) //[function : greet]
// console.log(obj.greet()) //Vivek undefined

// document.getElementById("demo").innerHTML = obj.name;

// 2nd type to object create..
// const person1 = new Object()
// person1.name = "Vivek"
// person1.lastName = "Patel"
// console.log(person1)

// for - in loop
// let x = ""
// for(let txt in person){
//     x += person[txt] + " "
// }
// console.log(x)

// delete person["age"];
// console.log(person)

let x = "";
const myObj = {
    name: "John",
    age: 30,
    cars: [
        {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
        {name:"BMW", models:["320", "X3", "X5"]},
        {name:"Fiat", models:["500", "Panda"]}
    ]
}

// for (let i in myObj.cars) {
//     x += "<h2>" + myObj.cars[i].name + "</h2>";
//     for (let j in myObj.cars[i].models) {
//         x += myObj.cars[i].models[j] + "<br>";
//     }
// }

for(let i in myObj.cars){
    x += "<h2>" + myObj.cars[i].name + "</h2>";
    for(let j in myObj.cars[i].models){
        "<ul>"
            x += "<li>" + myObj.cars[i].models[j] + "</li>" + "<br>"
        "</ul>"
    }
}

// document.getElementById("demo").innerHTML = x;

const person = {
    firstName : "Vivek",
    lastName : "Patel",
    id : 12345,
    fullName : function(){
        return this.firstName + " " + this.lastName;
    }
}

// document.getElementById("demo").innerHTML = person.fullName();

const x1 = "hello world";
let y = x1.toUpperCase();
console.log(y)

const person1 = {
    name: "John",
    age: function(){
        return 30
    },
    city: "New York",
    today : new Date()
};

// document.getElementById("demo").innerHTML = person1.name + " " + person1.age + " " + person1.city

let txt = " ";
for(let i in person1){
    txt += person1[i] + " ,"
}


// for(let i in person1){
//     txt += person1.i + " ,"
// }   ===> is not working because x is variable.

// document.getElementById("demo").innerHTML = txt


// object Value
// let myArray = Object.values(person1);
// document.getElementById("demo").innerHTML = myArray

// json.stringify()
person1.age = person1.age.toString()
let myString = JSON.stringify(person1);
// document.getElementById("demo").innerHTML = myString;

// This can be "fixed" if you convert the functions into strings before stringify.

const arr = ["John", "Peter", "Sally", "Jane"];
let myArray = JSON.stringify(arr)
// document.getElementById("demo").innerHTML = myArray

// getter 
// const person2 = {
//     firstName : "Vivek",
//     lastName : "Patel",
//     get lang(){
//         return this.firstName
//     }
// }

// document.getElementById("demo").innerHTML = person2.lang

const person3 = {
    firstName: "John",
    lastName: "Doe",
    language: "NO",
    set lang(value) {
        this.language = value;
        this.firstName = value;
    }
};

// Set an object property using a setter:
person3.lang = "en";
person3.firstName = "Vivek";

// Display data from the object:
// document.getElementById("demo").innerHTML = person3.language + person3.firstName;


// Object.defineProperty()

const obj = {
    counter : 0
}

// Object.defineProperty(obj,rest, {
//     get : function() {
//         this.counter = 0;
//     }
// })

// Object.defineProperty(obj,increment,{
//     get : function(){
//         this.counter++;
//     }
// })

// Object.defineProperty(obj,decrement,{
//     get : function(){
//         this.counter--;
//     }
// })

// Object.defineProperty(obj,add,{
//     set : function(value){
//         this.counter += value
//     }
// })

// Object.defineProperty(obj,subtract,{
//     set : function(value){
//         this.counter -= value;
//     }
// })

// obj.reset;
// obj.add = 5;
// obj.subtract = 1;
// obj.increment;
// obj.decrement;
// document.getElementById("demo").innerHTML = obj.counter;


function Person4(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
    this.name = function() {
        return this.firstName + " " + this.lastName
    };
}

// Create a Person object
// const myFather = new Person4("John", "Doe", 50, "blue");

// Display full name
// document.getElementById("demo").innerHTML ="My father is " + myFather.name(); /


// prototype property
function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}

Person.prototype.nationality = "English";

const myFather = new Person("John", "Doe", 50, "blue");
document.getElementById("demo").innerHTML = "The nationality of my father is " + myFather.nationality;

