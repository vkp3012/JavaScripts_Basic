// In JavaScript, a callback is a function that is passed as an argument to another function and is executed after its parent function has completed. The callback function can be called (or executed) within the parent function, hence the term "callback".

// The "callback value" typically refers to the result or output of this callback function. This value can be used in various ways depending on the context of the code. For example, it can be used to manipulate the DOM, handle errors, or update the state of an application.

function greeting(name){
    console.log("Hello " + name);
}

function processUserInput(callback){
    var name = console.log('Please enter your name.') 
    callback(name) // call the function with argument 'greeting' and pass in user input as
}

processUserInput(greeting)  