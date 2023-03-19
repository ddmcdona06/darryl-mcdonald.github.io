/**
 * Strings play a vital role in any programming language.
 *  Properly understanding string manipulation techniques can help developers easily handle tricky situations.
    In JavaScript, strings are immutable and help us to store text that includes characters, numbers, and Unicode. 
    Also, JavaScript includes many built-in functions for creating and manipulating strings in various ways.

 *0: String Manipulation:

  1: Methods

  .length() : returns the length of a string
    ex. let name = "Darryl";
        let length = name.length -> //6

  .slice() : extracts a part of a string and returns it into a new string
    ex. let fruit = "Apple, Banana, Kiwi";
        let part = fruit.slice(7, 13) -> // "Banana"

  .substring() : similar to slice but start and end values less than 0 are treated as 0

  .substr() : similar to slice but the second parameter specifies the length of the extracted part
    ex. let fruit = "Apple, Banana, Kiwi";
        let part = fruit.slice(7, 6) -> // "Banana"

  .concat() : joins two or more strings
    ex. let text1 = "Hello";
        let text2 = "World";
        let text3 = text1.concat(" ", text2) -> // "Hello World"

  .toUpperCase() : converts all values in string to uppercase
    ex. let text1 = "Hello World!";
        let text2 = text1.toUpperCase() -> // "HELLO WORLD!"

  .toLowerCase(): converts all values in strings to lowercase
    ex. let text1 = "Hello World!"; 
        let text2 = text1.toLowerCase() -> // "hello world!"

  .trim() : removes white space from both sides of a string
    ex. let text1 = "      Hello World!      ";
        let text2 = text1.trim() -> // "Hello World!"

  .trimStart() : removes white space from the start of a string
    ex. let text1 = "      Hello World!      ";
        let text2 = text1.trim() -> // "Hello World!    "

  .trimEnd() : removes white spcae from the end of a string
    ex. ex. let text1 = "      Hello World!      ";
        let text2 = text1.trim() -> // "    Hello World!"

  .padStart()/.padEnd() : pads a string with another string
    ex. let text = "5";
        let padded = text.padStart(4,"x") -> // "xxx5"
    ex. let text = "5";
        let padded = text.padEnd(4,"x") -> // "5xxx"

  .charAt() : returns the character at a specified index (position) in a string
    ex. let text = "HELLO WORLD";
        let char = text.charAt(0) -> // "H"

  .charCodeAt() : returns the unicode of the character at a specified index in a string
    ex. let text = "HELLO WORLD";
        let char = text.charCodeAt(0) -> // 72

  .replace() : replaces the first match in a string
    ex. let text = "Please visit Microsoft and Microsoft!";
        let newText = text.replace("Microsoft", "W3Schools") -> // "Please visit W3Schools and Microsoft"

  .replaceAll() : replaces all characters within a string
    ex. let text = "I love cats. Cats are very easy to love. Cats are awesome!"
        text = text.replaceAll("Cats","Dogs");
        let text = text.replaceAll("cats","dogs") -> // "I love dogs. Dogs are very easy to love. Dogs are awesome!"

  .split() : Divides a string into an ordered list of two or more substrings and returns it
    ex. let text = "Hello";
    const myArr = text.split("") -> // [H, E, L, L, O]

  2: Operators:
      - String operators concatenate values.
      ex. string1 + string2	Concatenates string1 and string2 so the beginning character of string2 follows the ending character of string1.
      ex. string1 += string2	Concatenates string1 and string2, and assigns the result to string1.

Examples:
 */

// Length
let myName = "Darryl";
console.log( myName.length); //6

// Slice
let fruit = "Apple, Banana, Kiwi";
console.log(fruit.slice(7, 13)); // "Banana"

// Plus Operator
let text1 = "Hello";
let text2 = "World";
console.log(text1 + " " + text2); // "Hello World"