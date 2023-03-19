/**
 * 0: Functions
 * 
 *  - A JavaScript function is a block of code designed to perform a particular task
 *  - A JavaScript function is executed when "something" invokes it (calls it)
 * 
 *  A JavaScript function is defined with the function keyword, followed by a name, followed by parentheses ()
    Function names can contain letters, digits, underscores, and dollar signs (same rules as variables)
    The parentheses may include parameter names separated by commas:

    ex. (parameter1, parameter2, ...)

    The code to be executed, by the function, is placed inside curly brackets: {}

    ex. function name(parameter1, parameter2, parameter3) {
        // code to be executed
        }
    - Function parameters are listed inside the parentheses () in the function definition
    - Function arguments are the values received by the function when it is invoked
    - Inside the function, the arguments (the parameters) behave as local variables

    The code inside the function will execute when "something" invokes (calls) the function:
        - When an event occurs (when a user clicks a button)
        - When it is invoked (called) from JavaScript code
        - Automatically (self invoked)

    When JavaScript reaches a return statement, the function will stop executing
    If the function was invoked from a statement, JavaScript will "return" to execute the code after the invoking statement
    Functions often compute a return value. The return value is "returned" back to the "caller":

        ex. let x = myFunction(4, 3);  // Function is called, return value will end up in x
            function myFunction(a, b) {
            return a * b;  // Function returns the product of a and b -> 12
    
    You can reuse code: Define the code once, and use it many times
    You can use the same code many times with different arguments, to produce different results
    Accessing a function without () will return the function object instead of the function result
    Functions can be used the same way as you use variables, in all types of formulas, assignments, and calculations
    Variables declared within a JavaScript function, become LOCAL to the function
    Local variables can only be accessed from within the function
    Since local variables are only recognized inside their functions, variables with the same name can be used in different functions
    Local variables are created when a function starts, and deleted when the function is completed


    2: Scope
    Scope determines the accessibility (visibility) of variables.
    JavaScript has 3 types of scope:

        - Block scope let and const variables declared inside a { } block cannot be accessed from outside the block
                ex. {
                    let x = 2;
                } // x can NOT be used here

        - Function scope  each function creates a new scope 
          Variables defined inside a function are not accessible (visible) from outside the function
          Variables declared with var, let and const are quite similar when declared inside a function
                ex. function myFunction() {
                                            let carName = "Volvo";   // Function Scope
                                        }

        - Global scope Variables declared Globally (outside any function) have Global Scope
          Global variables can be accessed from anywhere in a JavaScript program
          Variables declared with var, let and const are quite similar when declared outside a block
                ex. var x = 2;       // Global scope


    3: Closure

    A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). 
    In other words, a closure gives you access to an outer function's scope from an inner function. 
    In JavaScript, closures are created every time a function is created, at function creation time.


Examples:
 */

let x = myFunction(4, 3);   // Function is called, return value will end up in x

function myFunction(a, b) {
  return a * b;             // Function returns the product of a and b
}

// Function to compute the product of p1 and p2
function myFunction(p1, p2) {
    return p1 * p2;
  }
//call function
console.log(myFunction(5,5)); // prints 25


