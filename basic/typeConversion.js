// String Conversion
// String conversion happens when we need the string form of a value.

// For example, alert(value) does it to show the value.
let value = true;
console.log(typeof value); // boolean

value = String(value); // now value is a string "true"
console.log(typeof value); // string

// Numeric Conversion
// Numeric conversion in mathematical functions and expressions happens automatically.

// For example, when division / is applied to non-numbers:

let str = "123";
console.log(typeof str); // string

let num = Number(str); // becomes a number 123

console.log(typeof num); // number

let age = Number("an arbitrary string instead of a number");

console.log(age); // NaN, conversion failed

console.log( Number("   123   ") ); // 123
console.log( Number("123z") );      // NaN (error reading a number at "z")
console.log( Number(true) );        // 1
console.log( Number(false) );       // 0


// Boolean Conversion
// Boolean conversion is the simplest one.

// It happens in logical operations (later we’ll meet condition tests and other similar things) but can also be performed explicitly with a call to Boolean(value).

// The conversion rule:

// Values that are intuitively “empty”, like 0, an empty string, null, undefined, and NaN, become false.
// Other values become true.

console.log( Boolean(1) ); // true
console.log( Boolean(0) ); // false

console.log( Boolean("hello") ); // true
console.log( Boolean("") ); // false

console.log( Boolean("0") ); // true
console.log( Boolean(" ") ); // spaces, also true (any non-empty string is true)