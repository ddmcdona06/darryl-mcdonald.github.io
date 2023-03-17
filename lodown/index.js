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
 * @returns array with only the first <number> of elements
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
   * filter: Designed to return a new array of values found true within the func
   * @param {Array of indexes} array over which to iterate
   * @param {Function} action: function to be applied to each value in the array
   * @returns a new array of values found to be true when called into func 
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

    /**
     * reject: Designed to return a new array of values found false within func
     * @param {Array} array over which to iterate
     * @param {Function} action: function to be applied to each value in the array
     * @returns a new array of values found to be false when called into function
     */
    function reject(array, func){
        //declare new array
         let newArr = [];
         //use for loop to iterate through array
         for(let i = 0; i < array.length; i++){
           //if statement invoking function for each element in array
           if(!func(array[i], i, array)){
             //assign new array to value of elements that return true
             newArr.push(array[i]); 
           } 
           }
         return newArr;
         }
         module.exports.reject = reject;

    /**
     * partition: Designed to return an array of arays
     * @param {Array} array over which to iterate
     * @param {Function} action: function to be applied to each value in array
     * @returns an array with both truthy and falsey values as separate indexes 
     */
    function partition (array, func){
      //declare big array
      let bigArr = [];
      //declare new array for truthy 
        let newArr = [];
      //declare new array for falsy
      let newArr2 = [];
        //use for loop to iterate through array
        for(let i = 0; i < array.length; i++){
          //if statement invoking function for each element in array
          if(func(array[i], i, array)){
            //assign new array to value of elements that return true
            newArr.push(array[i]);        
          } else if(!func(array[i], i, array)){
            //assign new array to value of elements that return true
            newArr2.push(array[i]);      
          }  
          }
      bigArr.push(newArr);
      bigArr.push(newArr2);
      return bigArr;
    }
    module.exports.partition = partition;

    /**
     * map: Designed to take an array and return the values of a function call within a new array
     * @param {Array or Object} collection of values 
     * @param {Function} action: to be applied to every index in an array
     * @returns a new array of values called by the function
     */
    function map(collection, func){
      //declare an empty array
      let newArr = [];
      //determine if its array
      if(Array.isArray(collection)){
        //use for loop to acces collection
        for(let i = 0; i < collection.length; i++){
          //return the result of function into a new array
          newArr.push(func(collection[i], i, collection));
        }
      } else {
        //loop through object
        for(let key in collection){
          //return the result of function into a new array
          newArr.push(func(collection[key], key, collection));
        }    
      }
      //return the new array
      return newArr;
    }
    module.exports.map = map;

    /**
     * pluck: Designed to return an array with the value of property at each element
     * @param {Array} array of objects
     * @param {Any value} prop: the key name
     * @returns an array of keys values
     */
    function pluck(array, prop){
      //declare new array to value of map function
      let newArr = _.map(array, function(obj){
        return obj[prop];
      })
       //return new array
      return newArr;
    }
    module.exports.pluck = pluck;

    /**
     * every: Designed to take in a loop through a collection called by a function that return true or false values
     * @param {Array or Object} collection of values
     * @param {Function} action: determines if the values at eahc element of collection are truthy or falsey
     * @returns true if every element is true, false otherwise
     */
    function every(collection, func){
      //determine if func exist
      if(!func){
        //determine if array
        if(Array.isArray(collection)){
          //iterate 
          for(let i = 0; i < collection.length; i++){
            if(!collection[i]){
              return false;
            }
          }
        } else {
          for(let key in collection){
            //determine if curent value is not true
            if(!collection[key]){
              return false;
            }
          }
        }
      } else {
        //determine if array
        if(Array.isArray(collection)){
          //iterate
          for(let i = 0; i < collection.length; i++){
            //determine result of invoking test func on curren element, index, and collection
            if(!func(collection[i], i, collection)){
              return false;
            }
          }
        } else{
          //determine if result of invoking func on value,key,and collection is falsy
          for(let key in collection){
            if(!func(collection[key], key, collection)){
              return false;
            }
          }
        }
      }
      return true;
    }
    module.exports.every = every;
    
    /**
     * some: Designed to take in a loop through a collection called by a function that return true or false values
     * @param {Array or Object} collection of values
     * @param {Function} action: determines if the values at eahc element of collection are truthy or falsey
     * @returns false if every element is false, othewise true
     */
    function some(collection, func){
      //determine if func exist
      if(!func){
        //determine if array
        if(Array.isArray(collection)){
          //iterate 
          for(let i = 0; i < collection.length; i++){
            if(collection[i]){
              return true;
            }
          }
        } else {
          for(let key in collection){
            //determine if curent value is not true
            if(collection[key]){
              return true;
            }
          }
        }
      } else {
        //determine if array
        if(Array.isArray(collection)){
          //iterate
          for(let i = 0; i < collection.length; i++){
            //determine result of invoking test func on curren element, index, and collection
            if(func(collection[i], i, collection)){
              return true;
            }
          }
        } else{
          //determine if result of invoking func on value,key,and collection is falsy
          for(let key in collection){
            if(func(collection[key], key, collection)){
              return true;
            }
          }
        }
      }
      return false;
    }
module.exports.some = some;

/**
 * extend: Designed to add values to first object from all other object parameters
 * @param {Object} object1: any value that resolves to an object
 * @param {Object} object2: any value that resolves to an object 
 * @param  {...any Object} object: any number of remaining object parameters 
 * @returns the first object inclusive of all other objects key values in the parameter
 */
function extend(object1, object2, ...object){

  //use object.assign method to assign values of other parameters to object1
  Object.assign(object1, object2, ...object);

  //return object1
  return object1;
}
module.exports.extend = extend;

/**
 * indexOf: Designed to return the index of the first element that matches value
 * @param {Array} array 
 * @param {Any} value 
 * @returns the index of the matching value, or -1
 */
function indexOf(array, value){
  //declare variale to equal -1
  let neg1 = -1;
  //for loop to access array
  for(let i = 0; i < array.length; i++){
    //if statement comparing var element at array index
    if(array[i] === value){
      //return inside if statement to return only when it is first true
      return i;
    }
  }
  //return var neg1
 return neg1;
}
module.exports.indexOf = indexOf;

/**
 * unique: Designed to return an array with no duplicate values
 * @param {Array} array of any values
 * @returns a new array of unique values
 */
function unique(array){
  let newArr = array.filter(function(value, index){
    return array.indexOf(value) === index;
  });
  return newArr;
}
module.exports.unique = unique;

/**
 * last: Designed to return the last <number> of elements in an array
 * @param {Array} any value over which to iterate
 * @param {Number} any numeric value
 * @returns array with only the last <number> of elements
 */
function last(arr, num){
  //declare an empty array
  var empty = [];
  //if statement to ceck if its an array
  if(!Array.isArray(arr)){
    //return variable  empty
    return empty;
    //if statement if num is undefined or is not a number
  } else if(num === undefined || !num){
    //return the last index in arr
    return arr[arr.length - 1];
    //if statement for any number below 0
  } else if(num < 0){
    //return empty variable
    return empty;
    //if statement if num is greater than the length of the array
  } else if(num > arr.length){
    //return the array
    return arr;
    //otherwise return the last number of indexes in arr
  } else{
  return arr.slice(arr.length - num)
  }
}
module.exports.last = last;

/**
 * contains: Determines if an array contains a value 
 * @param {Array} array of values 
 * @param {Value} any value 
 * @returns true if array contains value, false otherwise
 */
function contains(array, value){
  var here = false;
  if(!value){
    return false;
  }
  for(let i = 0; i < array.length; i++){    
    array[i] === value ? here = true: here;
  }
  return here;
}
module.exports.contains = contains;

/**
 * reduce: to reduce the size of the array to a single value
 * @param {Array} array of values
 * @param {Function} action: passes every element in array passing the arguments
 * @param {Value} seed valued as the previous sult of the function call
 * @returns return the final value of the function call
 */
function reduce(array, func, seed){
  //create result variable
  let result;
  //determine if seed is undefined
  if(seed === undefined){
    result = array[0];
    //iterate using a for loop
    for(let i = 1; i < array.length; i++){
      result = func(result, array[i], i, array);
    }
  } else {//else seed is defined
    result = seed;
    //iterate with for loop
    for(let i = 0; i < array.length; i++){
      // reassign result
      result = func(result, array[i], i, array);
    }
  } 
  //return result
  return result;
}
module.exports.reduce = reduce;