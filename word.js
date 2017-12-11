// Word: Used to create an object representing the current word the user is attempting to guess. 
// This should contain word specific logic and data.

//require letter.js for this
var letter = require('./letter.js');

function Word(terms){
    var that = this;
    this.word = terms;

    //create an array for collecting letters object
    this.letters = [];
    //preset character found on letter to false
    this.charFound = false;

    this.getLetter = function(){ 
        for (var i = 0; i < that.word.length; i++){
            var newletter = new Letter(that.word[i]);
            this.letter.push(newletter);
        }
    };

    //create function to check if user input existing letter correctly for their guess word
    //shown letter in replace of _ if guess correct

    //create function that render word base on letter found

    

}