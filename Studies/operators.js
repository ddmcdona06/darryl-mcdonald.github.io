/**
 * 0: Operators: Special symbols used to perform operations on values.

  1. Assignment Operators: assigns values
    = : ex. a = b -> a = b
    += : ex. a += b -> a = a + b 
    -= : ex. a -= b -> a = a - b
    *= : ex. a *= b -> a = a * b
    /= : ex. a /= b -> a = a / b
    %= : ex. a %= b -> a = a % b
    **= : ex. a **= b -> a = a ** b
    
  2. Comparison Operators: compares two values and evaluates to a boolean
    == : equal to -> ex. a == b
    === : strictly equals -> ex. a === b
    != : not equal -> ex. a != b
    !== : strictly not equal to -> ex. a !== b
    > : greater than -> ex. a > b
    < : less than -> ex. a < b
    >= : greater than but equal to -> ex. a >= b
    <= : less than but equal to -> ex. a <= b
    ? : ternary operator *conditional* -> a ? b : x
    
  3. Arithmatic Operators: 
    + : addition
    - : subtraction
    * : multiplication
    / : division
    ** : exponent
    % : remainder
        
  4. Logical Operators: conditions usually resolve to true
    && : and -> ex. a && b (both conditions resolves to true)
    || : or -> ex. a || b (either condition resolves to true)
    

  5. Unary Operators:
    + : unary plus tries to convert the operand into a number
    - : unary minus tries to convert the operand into a number and negates after
    ~ : bitwise not -> inverts all bits in the operand and returns a number
    ! : logical not -> !a (flips the truthiness of its operand)
    typeof : returns a string which is the type of the operand
    ++ : adds 1 to its operand 
    -- : decrements 1 from its operand
    delete : deletes a specific index of an array or specific property of an object
    typeof: returns a string that is the type of the operand
    void: discards a return value as an expression

  6. Ternary operator:
    - The conditional (ternary) operator is the only JavaScript operator that takes three operands: a condition followed by a question mark (?)
    - Then an expression to execute if the condition is truthy followed by a colon (:)
    - And finally the expression to execute if the condition is falsy 
    - This operator is frequently used as an alternative to an if...else statement.    
      syntax: condition ? exprIfTrue : exprIfFalse

  Examples:
 */

  // Assignment
  let x = 10;
  x += 5; console.log(x) // 15

  // Arithmatic
  let a = 3;
  let b = 6; 
  console.log(a + b) // 9
  console.log(b - a)// 3
  console.log(a * b)// 18
  console.log(b / a)// 2
  console.log(b ** a)// 216
  console.log(7 % 2)// 1


  // Comaprison
  let c = 5;
  let d = 8;
  if(c < d){console.log(true)}; // true
  if(c > d){console.log(true)};// false
  if(c === d){console.log(true)};// false
  if(c !== d){console.log(true)};// true
  if(c <= d){console.log(true)};// true
  if(c >= d){console.log(true)};// false

  // Logical
  let e = 8;
  let f = 10;
  if(e > 5 && f < 20){console.log("decent number")}; // decent number
  if(e > 5 || f < 6){console.log("decent number")}; // decent number


  // Unary 
  let value = 10;
  console.log(typeof value); // "number"

// Ternary
let age = 26;
let beverage = age >= 21 ? "Beer" : "Juice";
console.log(beverage); // "Beer
