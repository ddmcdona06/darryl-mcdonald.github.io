// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require("underbar");

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *   npm start --prefix ./darryl-mcdonald.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
    //use _.filter(){} to return an array of only males
    let males  = _.filter(array, function(customer){
        return customer.gender === "male";
    });
    return males.length

};

var femaleCount = function(array){
    let females = _.reduce(array, function(accumulator, current){
        if(current.gender === "female"){
            accumulator += 1;
        }
        return accumulator;
    }, 0)
    return females;   
}

var oldestCustomer = function(array){
    //declare output string
    let oldest = "";
    //declare variable to equal a number
    let age = 0;
    //loop through array
    for(let i = 0; i < array.length; i++){
        //if statement comparing age values 
        if(array[i]["age"] > age){
            age = array[i]["age"];
        }
        //if statement if you are the oldest
        if(array[i]["age"] === age){
            oldest = array[i]["name"];
        }
    }
    return oldest;
}

var youngestCustomer = function(array){
      //declare output string
      let youngest = "";
      //declare variable to equal a number
      let age = 0;
      //loop through array
      for(let i = 0; i < array.length; i++){
          //if statement comparing age values 
          if(array[i]["age"] < age){
              age = array[i]["age"];
          }
          //if statement if you are the youngest
          if(array[i]["age"] === age){
              youngest = array[i]["name"];
          }
      }
      return youngest;
}

var averageBalance = function(array){
    //declare empty array
    let empty = [];
    //declare var for total
    let total = 0;
    //declare var for average
    let average = 0;
    //use for loop to access array
    for(let i = 0; i < array.length; i++){
         empty.push(array[i]["balance"]);
    }
    //use for loop to iterate through new array
    for(let j = 0; j < empty.length; j++){
        total += empty[j];    }
    average = total / empty.length;
    return average;
}

var firstLetterCount = function(array, letter){
    //declare num with a 0 value
  let num = 0;
  //declare an empty array
  let newArr = [];
  //use for loop to iterate through array
  for(let i = 0; i < array.length; i++){
    // use if statement to compare letter to first character in name key/value pair
    if(array[i]["name"].charAt(0) === letter.toUpperCase()){
      //push contact into new array
      newArr.push(array[i])
  }
  } 
  //declare num to equal the length of the new array
  num = newArr.length
  //return num
  return num;
}

var friendFirstLetterCount = function(array, customer, letter){
    //declare num with a 0 value
  let num = 0;
  //declare an empty array
  let newArr = [];
  //use for loop to iterate through array
  for(let i = 0; i < array.length; i++){
    //use while loop to limit the condition to only when customer matches name 
     if(customer === array[i]["name"]){
       //iterate through the friends array
       for(let j = 0; j < array[i]["friends"].length; j++){
         //if condtional to compare character 0 to letter
         if(array[i]["friends"][j]["name"].charAt(0) === letter.toUpperCase()){
           //push result into a new array
           newArr.push(array[i]["friends"][j]["name"]);
         }
       }
      }
  }     
  //declare num to equal the length of the new array
  num = newArr.length
  //return num
  return num;  
};

var friendsCount;

var topThreeTags;

var genderCount;

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
