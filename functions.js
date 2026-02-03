JavaScript Functions
Functions are Code Blocks

Functions are reusable code blocks designed to perform a particular task.

Functions are executed when they are called or invoked.

Functions are fundamental in all programming.

Why Use Functions?
Functions help you to:

Reuse code (write once, run many times)
Organize code into smaller parts
Make code easier to read and maintain
What Does a Function Look Like?
A function can be created with the function keyword, a name, and parentheses.

The code to run is written inside curly brackets.

Example
A one liner:

function sayHello() { return "Hello World"; }
or more common:
function sayHello() {
  return "Hello World";
}
Note
The function above does not do anything.

It has to be called first.

Functions Run When You Call Them
To run a function, you call it by using its name followed by parentheses like sayHello():

Example
function sayHello() {
  return "Hello World";
}

let message = sayHello();
Note
() means execute now.

REMOVE ADS

JavaScript Function Syntax
function name( p1, p2, ... ) {
  // code to be executed
}
Functions are defined with the function keyword:

followed by the function name
followed by parentheses ( )
followed by brackets { }
The function name follows the naming rules for variables.

Optional parameters are listed inside parentheses: ( p1, p2, ... )

Code to be executed is listed inside curly brackets: { }

Functions can return an optional value back to the caller.

Example
Function to multiply two numbers:

function multiply(a, b) {
  return a * b;
}
Note
A function definition is not an executable statement.

It is not common to end a function definition with a semicolon.

Semicolons are used to separate executable JavaScript statements.

A Function Can Be Used Many Times
A big benefit is that you can call the same function whenever you need it.

Example
function add(a, b) {
  return a + b;
}

let sum1 = add(5, 5);
let sum2 = add(50, 50);
Note
Note that values returned from functions can be stored in variables.

Local Variables
Variables declared within a JavaScript function, become LOCAL to the function.

Local variables can only be accessed from within the function.

Example
// code here can NOT use carName

function myFunction() {
  let carName = "Volvo";
  // code here CAN use carName
}

// code here can NOT use carName
Since local variables are only recognized inside their functions, variables with the same name can be used in different functions.

Note
Local variables are created when a function starts, and deleted when the function is completed.

Functions Used as Variables
Functions can be used as variables, in all types of formulas, assignments, and calculations.

Example
Instead of using a variable to store the return value of a function:

let x = toCelsius(77);
let text = "The temperature is " + x + " Celsius";
You can use the function directly, as a variable value:

let text = "The temperature is " + toCelsius(77) + " Celsius";
