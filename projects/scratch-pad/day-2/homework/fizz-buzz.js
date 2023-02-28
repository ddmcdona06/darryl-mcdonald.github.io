// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/
function fizzBuzz() {

    // YOUR CODE GOES BELOW HERE //
    while (number > 0 && number <= 100){
    switch (number){
        case number % 3 === 0 && number % 5 === 0:
            console.log('FizzBuzz');
            break;
        case number % 3 === 0:
            console.log('Fizz');
            break;
        case number % 5 === 0:
            console.log('Buzz');
            break;
        case number:
            console.log(number);
            break;
    }
}


    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}