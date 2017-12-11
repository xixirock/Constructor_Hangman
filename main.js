//add in required
var prompt = require('prompt');
var Word = require('./word.js');
var Game = require('./game.js');

var hangman = Game.newWord.hangman;
// message to user, give intro
console.log("Welcome to Hangman Game, this program is build through constructor");
console.log("Guess a letter of the name of a Game Title, test if you are a gamer!!");
console.log("Enjoy and Have fun! I know i didn't cause this was built after I bang my head on my table several times!!!");
console.log("---------------------------------------------------------");

//prompt start
prompt.start();


//Game starting stats and numb
game = {
    wordBank: ['STARCRAFT','THE LAST OF US','WARFRAME','WORLD OF WARCRAFT','HEARTSTONE','LEAGUE OF LEGENDS','DESTINY','HALO','DOOM','METAL GEAR SOLID','CIVILIZATION','CRASH BANDICOOT','STREET FIGHTERS'],
    WordGuessCorrect: 0,
    guessesRemaining: 10,
    currentWord: null,
    //Game initiate preset
    startGame: function(word) {
        this.resetGuesses();
        this.currentWord = new Word(this.wordBank[Math.floor(Math.random()* this.wordBank.length)]);
        this.currentWord = getLetter();
        this.userPrompt();
    },
    //write function for reseting guess once game's done
    resetGuesses: function(){
        this.guessesRemaining = 10;
    },


    userPrompt: function(){
        prompt.get(['guessedLet'], function(err, res){
            console.log("You guessed: " + res.guessedLet);
            var userGuess = this.currentWord.checkLetInWord(res.guessedLet);

            // return wrong msg if letter does not match in the word
            if (userGuess === 0){
                console.log('Nope');
                this.guessesRemaining--;
            }else {
                console.log('NICE!');
                if(this.currentWord.wordFound()){
                    console.log('You WON!');
                    console.log('-----------------');
                    return;
                }
            }

            console.log('Guess Remain: ' + this.guessesRemaining);
            console.log("-----------------");


            if((this.guessesRemaining > 0) && (this.currentWord.charFound == false)){
                this.userPrompt();
            }
            else if(this.guessesRemaining ==0){
                console.log("YOU GOT IT!", this.currentWord.terms);
            } else {
                console.log(this.currentWord.wordRender());
            } 
        });
    }
};

game.startGame();