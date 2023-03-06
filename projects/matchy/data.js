/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//declare animal object
var animal = {};
//use dot notation assign a key:value pair
animal.species = "dog";
//use bracket notation assign key name and a value
animal["name"] = "Shadow";
//use dot notation to assign a key value pair with an empty array 
animal.noises = [];
//print to console
console.log(animal);




//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//declare var and assign an empty array
var noises = [];
//use bracket notation to assign string 
noises[0] = "bark";
//use push method to add another noise
noises.push("howl");
//use unshit method to add another noise
noises.unshift("moan");
//use bracket notation and length property to add value to end of array
noises[noises.length] = "growl";
//log length of noises
console.log(noises.length);
//log the last index without hard coding
console.log(noises.length - 1);
//log array 
console.log(noises);





//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

//use bracket notation to assign noises to the animal object
animal["noises"] = noises;
//add another value to noises array
animal.noises.push("whine");


/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *
 * 2. What are the different ways of accessing elements on arrays?
 *
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
//declare var animals and assign to an array
var animals = [];
//push animal object into animals array
animals.push(animal);
//log animals
console.log(animals);
//declare var duck and assign it an object
var duck = {
  species: "duck",
  name: 'Jerome',
  noises: ['quack', 'honk', 'sneeze', 'woosh'],
};
//push duck object into animals
animals.push(duck);
//log animals
console.log(animals);
// declare var frog and assign an object
var frog = {
  species: "frog",
  name: "Kermit",
  noises: ['ribbit', 'boing'],
};
//declare var gorilla and assign an object
var gorilla = {
  species: "ape",
  name: "George",
  noises: ['grunt', 'howl'],
};
// push frog into animals array
animals.push(frog);
//push gorilla into animals array
animals.push(gorilla);
console.log(animals);



//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////



/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}