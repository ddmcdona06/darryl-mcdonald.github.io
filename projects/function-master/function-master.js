//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
    // use values function
    return Object.values(object);
  
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    //use object .keys  function
    var arr = Object.keys(object);
    //return using array join method
    return arr.join(" ");    

}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    //declare an empty array
    var arr = [];
    //loop through object
    for(var key in object){
        //use if statement to search for string
        if(typeof object[key] === 'string'){
            arr.push(object[key]);

        }
        
    }
     
       return arr.join(" ");
}


//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    //use if statement
    if(Array.isArray(collection)){
        //return array
        return "array";
        //else if comparing collection to object
    } else if(typeof collection === 'object'){
        //return object
        return 'object';
    }
    
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
        //use charAt, toUpperCase and .slice 
        return string.charAt(0).toUpperCase() + string.slice(1);

    
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    //use plit function to create new array
    var arr = string.split(" ");
    //loop over array
    for(let i = 0 ; i < arr.length; i++){
       arr[i] =  arr[i][0].toUpperCase() + arr[i].slice(1)
    }
    return arr.join(" ");
    
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    
    return "Welcome" + " " + object["name"].charAt(0).toUpperCase() + object.name.slice(1) + "!"

}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    return object["name"].charAt(0).toUpperCase() + object.name.slice(1) + " " + "is a" + " " + object["species"].charAt(0).toUpperCase() + object.species.slice(1);

}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
    //if statement looking for values at noises
    if(Array.isArray(object.noises) && object.noises.length > 0){
        return object.noises.join(" ");
    } else {return "there are no noises"}
    
    
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
    //declare array 
    var arr = string.split(' ');
    //loop through array
    for(let i = 0; i < arr.length; i++){
        //if statement to compare word with the other values
        if(arr[i] === word){
            return true;
        } 
    }
    return false;
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
    // push method to push name directly into array
    object["friends"].push(name);

    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
    
        if(Array.isArray(object["friends"]) && object["friends"].includes(name)){
            return true;
            }

    return false;
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
    //declare empty arrays to push values into
    var list = [];
    var newArr = [];
    var current = null;
    //use for loop 
    for(var i = 0; i < array.length; i++){
        //if statement comparing name to names in arrays
        if(name === array[i].name){
            //assign value to current
            current = array[i];
            //push names into new array
        } else{list.push(array[i].name);}
    }
    //if statement if no friends
    if(current === null){return list;}
    //loop through array list
    for(var i = 0; i < list.length; i++){
        //if statement 
        if(current.friends.indexOf(list[i]) == -1){
            //push names into newArr
            newArr.push(list[i]);
        }
    }

    return newArr;
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {    
       
    object[key] = value;
    return object;

}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
    for(var key in object){
        for(var i = 0; i < array.length; i++){
            if(key === array[i]){
                 delete object[key];
            } 
        }
    }

}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
    return array.filter((item,index) => array.indexOf(item) === index); 

}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}