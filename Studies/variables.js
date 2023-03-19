/**
 * VARIABLES:
 * 
 * 0: Variables are named containers for data in Javascript.
 *  - var, let and const are the key words that tells javascript you're declaring a variable
 *     *var keyword has been used in all javascript code since 1995*
 *     *let and const keywords were added in 2015, primarily to avoid repeating declared var 
 * 
 * 1. Declaration: 
 *      var - can be reassigned, redeclared, hoisted
 *          ex. var snowball; 
 * 
        let - can be reassigned, cannot be redeclared or hoisted, can be initialized
            ex. let snowball;

        const - cannot be reassigned, redclared, hoisted, must be initilized
            ex. const snowball;
 *  
 * 
 * 2. Assignment/Initialization :
 *  - To assign a variable you use the = operator
 *      ex. console.log(var snowball = "Tiger's Blood");// prints -> "Tiger's Blood"
 * 
 *  - When a variable is left unassigned, it will log undefined 
 *      ex. console.log(var snowball;)// prints -> undefined
 * 
 * 3. Reassignment:
 *  - changing or updating the value of a previously assigned variable
 *      ex. snowball = "Jungle Juice";
 *      console.log(snowball);// prints -> "Jungle Juice"
 * 
 * 4. Hoisting:
 * 
 *  - refers to the process whereby the interpreter appears to move the declaration of functions, variables or classes to the top of their scope, prior to execution of the code
 *  - Being able to use a variable's value in its scope before the line it is declared ("Value hoisting")
 *  - Being able to reference a variable in its scope before the line it is declared, without throwing a ReferenceError, but the value is always undefined ("Declaration hoisting")
 *  - The declaration of the variable causes behavior changes in its scope before the line in which it is declared
 *  - The four function declarations are hoisted with type 1 behavior
 *  - var declaration is hoisted with type 2 behavior 
 *  - let, const, and class declarations (also collectively called lexical declarations) are hoisted with type 3 behavior
 * 
 * Examples: 
 */
//Declaration:
var myName; console.log(myName) // undefined

let age; console.log(age) // undefined

// *const has to be assigned*

//Assignment:
myName = "Darryl"; console.log(myName) // Darryl

age = 40; console.log(age) // 40

const pet = false; console.log(pet) // false

//Reassignment:
myName = "Dan"; console.log(myName) // Dan

age = 29; console.log(age) // 29

// *const cannot be reassigned*

//Hoisting:

const x = 1;
{
  console.log(x); // ReferenceError
  const x = 2;
}

/**
 * If the const x = 2 declaration is not hoisted at all (as in, it only comes into effect when it's executed),
 * then the console.log(x) statement should be able to read the x value from the upper scope.
 * However, because the const declaration still "taints" the entire scope it's defined in, 
 * the console.log(x) statement reads the x from the const x = 2 declaration instead, which is not yet initialized, and throws a ReferenceError
 */