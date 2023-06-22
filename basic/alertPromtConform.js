// alert : It shows a message and waits for the user to press “OK”.

// alert("hello")

/* 
    prompt : 
        The function prompt accepts two arguments.
        It shows a modal window with a text message, an input field for the visitor, and the buttons OK/Cancel.

        title : The text to show the visitor.

        default :
        An optional second parameter, the initial value for the input field.
*/

// result = prompt(title, [default]);

let age = prompt('How old are you?', 100);

alert(`You are ${age} years old!`); // You are 100 years old!


/*
    confirm : 
        The function confirm shows a modal window with a question and two buttons: OK and Cancel.
        The result is true if OK is pressed and false otherwise.
*/

let isBoss = confirm("Are you the boss?");
alert( isBoss ); 