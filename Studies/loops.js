/**
 * 0: Loops
 * 
 * 1. for-loops through a block of code a number of times
 *      - The for statement creates a loop with 3 optional expressions:
 *           ex. for(expression 1; expression 2; expression 3) {// code block to be executed}
 * 
 *      - Expression 1 is executed (one time) before the execution of the code block
 *          *use expression 1 to initialize the variable used in the loop (let i = 0)*
 * 
        - Expression 2 defines the condition for executing the code block
            *expression 2 is used to evaluate the condition of the initial variable (i < 5)*
            *If expression 2 returns true, the loop will start over again. If it returns false, the loop will end*

        - Expression 3 is executed (every time) after the code block has been executed
            *expression 3 increments the value of the initial variable*
            *expression 3 can do anything like negative increment (i--), positive increment (i++), or anything else*
                ex. for(let i = array.length; i > 0; i--){codeblock}

 * 2. for/in - loops through the properties of an object
        - for(key in object) {// code block to be executed}
        - The for in loop iterates over a person object
        - Each iteration returns a key (x) 
        - The key is used to access the value of the key 
        - The value of the key is person[x]
        ex. const person = {fname:"John", lname:"Doe", age:25};
            let text = "";
            for (let x in person) {
            text += person[x];}

 * 3. for/of - loops through the values of an iterable object 
        - for (variable of iterable) {// code block to be executed}
        - iterable - An object that has iterable properties.
        - variable for every iteration the value of the next property is assigned to the variable
        - variable can be declared with const, let, or var, 
        ex. const cars = ["BMW", "Volvo", "Mini"];
            let text = "";
            for (let x of cars) {
            text += x;}

 * 4. while - loops through a block of code while a specified condition is true
        - while (condition) {// code block to be executed}
        ex. while (i < 10) {
            text += "The number is " + i;
            i++;}

 * 5. do/while - The do while loop is a variant of the while loop. 
        - This loop will execute the code block once, before checking if the condition is true, then it will repeat the loop as long as the condition is true.
        ex. do {
            text += "The number is " + i;
            i++;}
            while (i < 10); 
 * 
Examples:
 */

// For Loop
for(let i = 0; i < Array.length; i++){
    console.log(array[i]) // incremental loop
};

for(let i = array.length; i > 0; i--){
    console.log(array[i]) // decremental loop
};

// For/In Loop
for(let key in object){
    console.log(object[key]) // loop through an object literal
}

// While Loop
let i = 8;
while (i < 10) {
    console.log(text += "The number is " + i);
    i++;
  } //"The number is 8"