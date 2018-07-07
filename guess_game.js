var number = Math.floor(Math.random() * 100);
var guess;
var limit = 5;
var won =  false;
var guesses = [];

for (i = 1; i <= limit; i++)
{
    guess = parseInt(prompt("Guess a number"));
    if(guess == number)
    {
        document.write("Correct! You won.");
        won = true;
        break;
    }
    else
    {
        guesses[i] = guess;
        alert("incorrect. \nYou have guessed: " + guesses.toString() + "\nTries remaining: " + (limit - i));
    }
}
if(!won)
{
    document.write("Sorry, you ran out of tries. Game over. <br> The correct number was: " + number);
}
function isPreviousGuess()
{
    for(i = 0; i < guesses.length; i++)
    {
        if(guesses[i] = guess)
        {
            return true;
        }
    }
    return false;
}
