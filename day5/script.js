// Number Guessing Game (practice project1)
const secretNumber = 7;
let guess = prompt("Guess the number between 1 and 10 (or type 'quit' to exit):");

while (guess !== "quit") {
    guess = Number(guess);

    if (guess === secretNumber) {
        console.log("Congratulations!! You guessed the correct number");
        break;
    } else {
        guess = prompt("Wrong guess! Try again or type 'quit' to exit:");
    }
}

if (guess === "quit") {
    console.log("You quit the game. Better luck next time!");
}
