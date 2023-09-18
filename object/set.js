// A JavaScript Set is a collection of unique values.
// Each value can only occur once in a Set.
// A Set can hold any value of any data type.

// The new Set() Method
const letter = new Set(["a","b","c"])
console.log(letter);

// add()	Adds a new element to the Set
const letters = new Set();
letters.add("a")
letters.add("b")
letters.add("c")
letters.add("d")
console.log(letters)


// The forEach() Method - The forEach() method invokes a function for each Set element:
let text = "";
letters.forEach(function(value){
    text += value;
})

console.log(text)

// The values() Method
// The values() method returns an Iterator object containing all the values in a Set:

// Example
console.log(letters.values())   // Returns [object Set Iterator]

// The keys() Method
// A Set has no keys.
// keys() returns the same as values().
// This makes Sets compatible with Maps.

// Example
console.log(letters.keys())   // Returns [object Set Iterator]

// The entries() Method
// A Set has no keys.
// entries() returns [value,value] pairs instead of [key,value] pairs.

// List all entries
const iterator = letters.entries();
let text1 = "";
for (const entry of iterator) {
    text1 += entry + " ";
}
console.log(text1)

console.log(typeof letters)

// instanceof Set returns true
console.log(letters instanceof Set)