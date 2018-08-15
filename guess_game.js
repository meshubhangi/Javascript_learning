var number = 4;
var guess;
var limit = 5;
var won =  false;
var guesses = [];

for (i = 1; i <= limit; i++){
    guess = prompt("Guess a number");
    if(guess == number){
        document.write("Correct! You won.");
        won = true;
        break;
    }
    // if incorrect: add number to guesses array
    else{
        guesses[i] = guess;
        alert("incorrect. \nYou have guessed: " + guesses.toString() + "\nTries remaining: " + (limit - i));
    }
}
if(!won){
    document.write("Sorry, you ran out of tries. Game over.");
}