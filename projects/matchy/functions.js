/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

const { isNull } = require("lodash");

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////


//declare function search that takes on parameter animals array and name string
function search(animals, name ){
    //loop through animals array
    for(var i = 0; i < animals.length; i++){
        //loop through animals objects
        for(var key in animals[i]){            
        }
         if(name === animals[i]["name"] ){ 
            return animals[i];
        }            
    }
    return null;
}


//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//declare function replace with parameters animals, name, and replacement
function replace(animals, name, replacement){
    //loop through animals array
    for(var i = 0; i < animals.length; i++){
        //loop through animals objects
        for(var key in animals[i]){
            //declare variable and assign it name key value pair
            var namesObj = animals[i]["name"];
        }
    }
        //if statement comparing name and namesObj    
        if(name !== namesObj){
            //use splice to remove and replace name
            return animals.splice(animals[i], 1, replacement)
        }
}

//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//declare function remove with animals and animal as its parameters
function remove(animals, name){
    //loop through animals array
    for(var i = 0; i < animals.length; i++){
        //loop through animals objects
        for(var key in animals[i]){
            //declare variable and assign it name key value pair
            var namesObj = animals[i]["name"];
}
        //if statement to compare name and nameObj
        if(name === namesObj){
            //use splice to remove name
            return animals.splice(animals[i], 1)
        }
    }
}
    


//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// declare function add with parameters animals array and animal object
function add(animals, animal){
 
    //loop through animals array
    for(var i = 0; i < animals.length; i++){
        //loop through animals objects
        for(var key in animals[i]){
            //declare variable and assign it name key value pair
            var namesObj = animals[i]["name"]
        }
        if(animal["species"].length > 0 && animal["name"].length > 0 && animal['name'] !== namesObj){
            return animals.push(animal);
        } else if(animal["name"] === namesObj){
            return;
        }
}
  
}



/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
