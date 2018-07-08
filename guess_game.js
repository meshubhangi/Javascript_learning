var number = Math.floor(Math.random() * 100);
var guess;
var limit = 5;
var won =  false;
var guesses = [];


for (var i = 1; i <= limit; i++){
 
    do{
        guess = parseInt(prompt("Guess a number"));
    } while(isNaN(guess) || isPreviousGuess(guess));
    

    if(guess == number){
        document.write("Correct! You won.");
        won = true;
        break;
    }

    else{
        guesses[i] = guess;
        alert("incorrect. \nYou have guessed: " + guesses.toString() + "\nTries remaining: " + (limit - i));
    }
}
