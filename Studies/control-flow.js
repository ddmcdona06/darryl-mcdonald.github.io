/**
 * 0: Control Flow
 * 
 * The control flow is the order in which the computer executes statements in a script
Code is run in order from the first line in the file to the last line
Unless the computer runs across the (extremely frequent) structures that change the control flow, such as conditionals and loops

For example, imagine a script used to validate user data from a webpage form
The script submits validated data, but if the user, say, leaves a required field empty, the script prompts them to fill it in
To do this, the script uses a conditional structure or if...else, so that different code executes depending on whether the form is complete or not:

    ex. if (isEmpty(field)) {
    promptUser();
    } else {
    submitForm();
    }


A typical script in JavaScript or PHP (and the like) includes many control structures, including conditionals, loops and functions
Parts of a script may also be set to execute when events occur
For example, the above excerpt might be inside a function that runs when the user clicks the Submit button for the form 
The function could also include a loop, which iterates through all of the fields in the form, checking each one in turn 
Looking back at the code in the if and else sections, the lines promptUser and submitForm could also be calls to other functions in the script 
As you can see, control structures can dictate complex flows of processing even with only a few lines of code
Control flow means that when you read a script, you must not only read from start to finish but also look at program structure and how it affects order of execution

    1:Conditional Statements

    A: If statements
        - Use the if statement to specify a block of JavaScript code to be executed if a condition is true

    B: Else/If
        - Use the else if statement to specify a new condition if the first condition is false

    3: Else
        - Use the else statement to specify a block of code to be executed if the condition is false

    4: Switch statements
        - Use the switch statement to select one of many code blocks to be executed

Examples:
 */

// If Statements
let hours = 6;
if (hours < 18) {
    greeting = "Good day"; // "Good day"
  }

// Else Statemants
let hour = 23
if (hour < 18) {
    greeting = "Good day";
  } else {
    greeting = "Good evening"; // "Good evening"
  }

// Else/If Statements
let time = 15;
if (time < 10) {
    greeting = "Good morning";
  } else if (time < 20) {
    greeting = "Good day";
  } else {
    greeting = "Good evening"; // "Good day"
  }

// Switch Statement
const Animal = "Giraffe";
switch (Animal) {
  case "Cow":
  case "Giraffe":
  case "Dog":
  case "Pig":
    console.log("This animal is not extinct.");
    break;
  case "Dinosaur":
  default:
    console.log("This animal is extinct.");
} //"This animal is not extinct."