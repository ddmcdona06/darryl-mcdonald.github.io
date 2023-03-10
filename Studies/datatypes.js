/**
 * Datatypes:
 * 
 * 0: The types of values in Javascript

  1. Simple/Primitive: All types except Object define immutable values represented directly at the lowest level of the language.
     We refer to values of these types as primitive values.
     
    - Number: numeric data -> 25
    - String: The String type represents textual data -> "Last of Us"
        Each element in the string occupies a position in the string. The first element is at index 0, the next at index 1, and so on. 
        JavaScript strings are immutable. This means that once a string is created, it is not possible to modify it.
        String methods create new strings based on the content of the current string.
    - Boolean: The Boolean type represents a logical entity and is inhabited by two values: true and false.
        Boolean values are usually used for conditional operations, including ternary operators, if...else, while, etc.
    - NaN: a special kind of number value that's typically encountered when the result of an arithmetic operation cannot be expressed as a number.
        It is also the only value in JavaScript that is not equal to itself.
    - Undefined: indicates the absence of a value, The language usually defaults to undefined when something is devoid of a value.
    - Null: inhabited only by the value Null, indicates the absence of an object.
    - Infinity: a global numeric value representing infintiy
    - Infinity: a global numeric value representing -infinity
    
  2. Complex: takes on multiple values grouped together, are passed to functions w/o a value(By Reference)
    - Array: indexed list-like objects -> [value,value]
    - Object: stores keyed collections -> {key:value, key:value}
    - Function: a set of statements that performs a task or calculates a value -> function(){a + b}
 */