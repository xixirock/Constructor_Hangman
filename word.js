// Word: Used to create an object representing the current word the user is attempting to guess. 
// This should contain word specific logic and data.

//require letter.js for this
var Letter = require('./letter.js');

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

    this.wordFound = function() {
        if(this.letters.every(function(let){
            return let.appear === true;
          })){
            this.charFound = true;
            return true;
          }
    };

    //create function to check if user input existing letter correctly for their guess word
    this.checkLetInWord =function (guessedLet){
        var returnLet = 0;
        //shown letter in replace of _ if guess correct
        this.letters.forEach(function(let){
            if(let.letter === guessedLet){
                let.appear = true;
                returnLet++;
            }
        })
        //letter will be shown if guess correct
        return returnLet;
    };

   

    //create function that render word base on letter found
    this.wordRender = function(){
        var displayLet = '';
        //render word base on letter found
        that.letters.forEach(function(let){
            var currentLet = let.letterRender();
            displayLet += currentLet;
        });

        return displayLet;
    };


}


// export for main.js to use

module.exports = Word;