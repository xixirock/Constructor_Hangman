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

    this.letterRender = function(){
        
    }
}