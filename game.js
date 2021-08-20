let gameArray= ["h","o","d","e","z"];

let letters= [];

let lettersToGuess = null;

let wins = 0;
let losses= 0;
let guessesLeft = 9;

let changeGuessesLeft = function (){
    document.querySelector("#guesses-left").innerHTML=guessesLeft;

};

let updateLetterToGuess = function() {
  
    lettersToGuess = letters[Math.floor(Math.random() * gameArray.length)];
};

let chagesGuesses = function () {
      document.querySelector("#guesses").innerHTML= letters.join(",");

};

let reset = function () {
    guessesLeft = 9;
    letters = [];
    changeGuessesLeft();
    chagesGuesses();
    updateLetterToGuess();

};

  
changeGuessesLeft();
updateLetterToGuess();

document.onkeydown = function(event) {
    
    guessesLeft--;

    let letter = String.fromCharCode(event.which).toLowerCase();
    letters.push(letter);       
    
    changeGuessesLeft();    
    chagesGuesses();

    if (letter=== lettersToGuess) {

        wins++;
        document.querySelector("#game-win").innerHTML=wins;
        reset();
    };

    

    if(guessesLeft===0){
        losses++;
        document.querySelector("#game-losses").innerHTML=losses
        reset();
    };

    

};