/* 
    var :  
        The Scope of var variable is function scope.
        It can be declared without initialization.
        var variable is scoped.
        var variable is mutable.
        It can be accessed without initialization as its default value is “undefined”.
        var variable is temporal.
        It can be updated and re-declared  into the Scope.
*/
console.log("----------- var ------------------------")
a = 5
console.log(a)

var a = 2
console.log(a)

a = 7
console.log(a)

var a = 9
console.log(a)

/* 
    let : 
        The Scope of let variable is block scope.
        It can be updated but cannot be re-declared into the scope.
        let variable is scoped.
        let variable is mutable.
        It can be declared without initialization.
        It cannot be accessed without initialization otherwise it will give ‘referenceError’.
*/

console.log("-------------- let -----------------")
let l = 2
console.log(l)

l = 7
console.log(l)

// let l = 6  SyntaxError: Identifier 'l' has already been declared

/* 
    const : 
        The Scope of const variable is block scope.
        It cannot be updated or re-declared into the scope.
        const variable is scoped.
        It cannot be declared without initialization.
        It cannot be accessed without initialization, as it cannot be declared without initialization.
*/

console.log("----------- Const ------------------------")
const viv = 5
// viv = 6   TypeError: Assignment to constant variable.
console.log(viv)

