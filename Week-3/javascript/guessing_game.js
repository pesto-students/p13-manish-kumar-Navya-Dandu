
let number = prompt("Enter a number between 1 to 100");
    let totalGuesses = 10;
function numToGuess(numToGuess,totalGuesses) {

    while(number!= 0) {
        let count=0
        count++;
}
 if(number < numToGuess) {
            console.log("X is too small. Guess a larger number.");
        } else if(number > numToGuess) {
            console.log("X is too large. Guess a smaller number.")
        }
return count
}

console.log(numToGuess(9, 5))

//not done yet