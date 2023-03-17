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

 */