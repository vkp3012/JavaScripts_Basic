// In contrast, objects are used to store keyed collections of various data and more complex entities. In JavaScript, objects penetrate almost every aspect of the language.

// A property is a “key: value” pair, where key is a string (also called a “property name”), and value can be anything.

// an create empty object - "object constructor" syntax
let user = new Object()

// "object literal" syntax
let user1 = {}

//an object
let user2 = {
    "name" : "Vivek",
    "age" : 25
}

// A property has a key (also known as “name” or “identifier”) before the colon ":" and a value to the right of it.

// In the user object, there are two properties:

// The first property has the name "name" and the value "Vivek".
// The second one has the name "age" and the value 25.

console.log(user2.name)
console.log(user2.age)

//  Let’s add a boolean one:
user2.isAdmin = true
console.log(user2)

// we can use the delete operator:
delete user2.age
console.log(user2)

// We can also use multiword property names,
let user3 = {
    name: "John",
    age: 30,
    "likes birds": true  // multiword property name must be quoted
};
console.log(user3)

// The last property in the list may end with a comma:
let user4 = {
    name: "John",
    age: 30,
}
console.log(user4)

// That is called a “trailing” or “hanging” comma. 


// For multiword properties, the dot access doesn’t work:
// this would give a syntax error
// user3.likes birds = true

// There’s an alternative “square bracket notation” that works with any string:
let user5 = {};

// set
user5["likes birds"] = true;

// get
console.log(user5["likes birds"]); // true

// delete
delete user5["likes birds"];

// Square brackets and dot notation
let user6 = {
    name : "John",
    age : 30
}
let key = "name"
console.log(user6[key]) //John
console.log(user6.key)  //undefined

// Computed properties
// We can use square brackets in an object literal, when creating an object. That’s called computed properties.
// let fruit = console.log("Which fruit to buy ? " , "apple")
// let bag = {
//     [fruit] : 5
// }

// console.log(bag.apple)

let fruit = 'apple';
let bag = {
  [fruit + 'Computers']: 5 // bag.appleComputers = 5
};

console.log(bag)

// Square brackets are much more powerful than dot notation. They allow any property names and variables.

// Property value shorthand : - In the example above, properties have the same names as variables. The use-case of making a property from a variable is so common, that there’s a special property value shorthand to make it shorter.

function makeUser(name,age){
    return{
        name : name,
        age : age
    }
}

let user7 = makeUser("John",30)
console.log(user7.name)

let obj = {
    0: "test" // same as "0": "test"
};

// both alerts access the same property (the number 0 is converted to string "0")
console.log( obj["0"] ); // test
console.log( obj[0] ); // test (same property)

let obj1 = {};
obj1.__proto__ = 5; // assign a number
console.log(obj1.__proto__);

// Property existence test, “in” operator
// There will be no error if the property doesn’t exist!

// Reading a non-existing property just returns undefined. So we can easily test whether the property exists:

let user8 = {};

console.log( user8.noSuchProperty === undefined ); // true means "no such property"
console.log( user8.noSuchProperty == undefined ); // true means "no such property"

// There’s also a special operator "in" for that.

// The syntax is:

// "key" in object

let user9 = { name: "John", age: 30 };

console.log( "age" in user9 ); // true, user.age exists
console.log( "blabla" in user9 ); // false, user.blabla doesn't exist

// Please note that on the left side of in there must be a property name. That’s usually a quoted string.

// The "for..in" loop
// To walk over all keys of an object, there exists a special form of the loop: for..in. This is a completely different thing from the for(;;) construct that we studied before.

// The syntax:

// for (key in object) {
//   // executes the body for each key among object properties
// }

// Example
let user10 = {
    name : "John",
    age : 30,
    isAdmin : true
}

for(let key in user10){
    console.log(key)
    console.log(user10[key])
}

// Question : - Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

// solution
let sum = 0;
for(let key in salaries){
    sum += salaries[key]
}
console.log(sum)

// Multiply numeric property values by 2
// importance: 3
// Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.

// before the call
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

function multiplyNumeric(obj){
    for(let key in obj){
        if(typeof obj[key] == "number"){
            obj[key] *= 2;
        }
    }
}

multiplyNumeric(menu);
console.log( "menu width=" + menu.width + " height=" + menu.height + " title=" + menu.title );
// after the call
menu = {
    width: 400,
    height: 600,
    title: "My menu"
};


multiplyNumeric(menu);
console.log( "menu width=" + menu.width + " height=" + menu.height + " title=" + menu.title );

// console.log(multiplyNumeric(menu));