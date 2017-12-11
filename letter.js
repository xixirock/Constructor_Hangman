// Letter: Used for each letter in the current word. 
// Each letter object should either display an underlying character, 
// or a blank placeholder (such as an underscore), 
// depending on whether or not the user has guessed the letter. 
// This should contain letter specific logic and data.

var letter = function(let){
    //create a property to store letter
    this.letter = let;
    //Boolean value to determine whether the letter to be shown or not
    this.appear = false;
    // works if word bank doesn't contain space, need other
    // this.letterRender = function(){
    //     return !(this.appear) ? "_" : this.letter;
    // };

    this.letterRender = function(){
        if(this.letter === ' '){
            //allow function to read space as part of the string and not interpret as false
            this.appear = true;
            return ' ';
        }

        if(this.appear === false){
            return '_';
        }else{
            return this.letter;
        }
    };
};

//export to word.js
module.exports = letter;

