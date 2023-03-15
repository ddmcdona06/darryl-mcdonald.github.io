'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;

/**
 * identity: Designed to return a value unchanged
 * 
 * @param {Any} value: the value being returned 
 * @returns value
 * 
 */

function identity(value){
    return value;
}
module.exports.identity = identity;

/**
 * typeOf: Designed to return the datatype of value as a string 
 * @param {Any} value: Any datatype
 * @returns Datatype of value as a string
 * 
 */
function typeOf(value){
    //if statement value is an array
    if(Array.isArray(value)){
        return "array";
    } else if(typeof value === "object" && value === null){
        return "null"
    } else{
        return typeof value;
    }

}
module.exports.typeOf = typeOf;

/**
 * first: Designed to return the first <number> of elements in the <array>
 * @param {Array} array over which to iterate
 * @param {Numeric value} num 
 * @returns 
 */
function first(arr, num){
    //declare an empty array
    var empty = [];
    //if statement to ceck if its an array
    if(!Array.isArray(arr)){
      //return variable  empty
      return empty;
      //if statement if num is undefined or is not a number
    } else if(num === undefined || !num){
      //return the first index in arr
      return arr[0];
      //if statement for any number below 0
    } else if(num < 0){
      //return empty variable
      return empty;
      //if statement if num is greater than the length of the array
    } else if(num > arr.length){
      //return the array
      return arr;
      //otherwise return the first number of indexes in arr
    } else{
    return arr.slice(0, num)
    }
  }
  module.exports.first = first;

  /**
   * 
   * @param {Array of indexes} array over which to iterate
   * @param {Function} action: function to be applied to each value in the array
   * @returns 
   */
  function filter(array, func){
    //declare new array
    let newArr = [];
    //use for loop to iterate through array
    for(let i = 0; i < array.length; i++){
      //if statement invoking function for each element in array
      if(func(array[i], i, array)){
        //assign new array to value of elements that return true
        newArr.push(array[i]); 
      } 
      }
    return newArr;
    }
    module.exports.filter = filter;

