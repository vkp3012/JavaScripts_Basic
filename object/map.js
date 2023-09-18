// A Map holds key-value pairs where the keys can be any datatype.
// A Map remembers the original insertion order of the keys.
// A Map has a property that represents the size of the map.

const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
]);

console.log(fruits)

// Map.set()
// You can add elements to a Map with the set() method:

// Example
// Create a Map
const fruits1 = new Map();

// Set Map Values
fruits1.set("apples", 500);
fruits1.set("bananas", 300);
fruits1.set("oranges", 200);

console.log(fruits1)

// Map.get()
// The get() method gets the value of a key in a Map:

// Example
console.log(fruits.get("apples")); 

// Map.size
// The size property returns the number of elements in a Map:

console.log(fruits.size)

// Map.delete()
// The delete() method removes a Map element.

console.log(delete fruits.apple)

// Map.clear()
// The clear() method removes all the elements from a Map

// console.log(fruits.clear())

// console.log(fruits)

// Map.has()
// The has() method returns true if a key exists in a Map

console.log(fruits.has("apple"))

console.log(typeof fruits)

console.log(fruits instanceof Map)

// Map.forEach()
// The forEach() method invokes a callback for each key/value pair in a Map.

let text = "";
fruits.forEach (function(value, key) {
    text += key + ' = ' + value;
})
console.log(text)


// Map.entries()
// The entries() method returns an iterator object with the [key,values] in a Map.

let text1 = "";
for (const x of fruits.entries()) {
    text1 += x;
}

console.log(text1)


// Map.keys()
// The keys() method returns an iterator object with the keys in a Map

let text2 = "";
for (const x of fruits.keys()) {
    text2 += x;
}

console.log(text2)

// Map.values()
// The values() method returns an iterator object with the values in a Map

let text3 = "";
for (const x of fruits.values()) {
    text3 += x;
}

console.log(text3)