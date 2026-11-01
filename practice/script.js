// Number Guessing Game = 
const secretNumber = 7;
let guess = prompt("guess the number between 1 and 10 or type 'quit' to exit!");
while(guess!=="quit"){
    guess=Number(guess);
    if(guess==secretNumber){
        console.log("Congratulations! You guessed the number right!");
        break;
    }
    else{
        guess = prompt("Try again! Better luck next time!");
    }
}
if(guess=="quit"){
    console.log("You have quit the game now!");
}

// Multiplication Table Generator = 
let num = prompt("input the number:");
num = Number(num);
if(isNan(num)){
    num = prompt("invalid input! try again!");
}
else{
    for(let i=1;i<=10;i++){
        console.log(`${num} * ${i} = ${num*i}`);
    }
}

// Student Marks & Grade Calculator
let marks = [90,91,92,93,94];
// total marks
let total = 0;
for(let i=0;i<marks.length;i++){
    total+=marks[i];
}
console.log("Total Marks: ", total);
// average marks
let avg = total/marks.length;
console.log("Average marks: ", avg);
// grade:
if(avg>=90){
    console.log("Grade: O");
}
else if(avg>=80){
    console.log("Grade: A+");
}
else if(avg>=70){
    console.log("Grade: A");
}
else if(avg>=60){
    console.log("Grade: B+");
}
else {
    console.log("Grade: B");
}
// pass or fail =
let pass = true;
for(let i=0;i<marks.length;i++){
    if(marks[i]<33){
        pass = fail;
        break;
    }
}
if(pass==true) console.log("Result:PASS");
else console.log("RESULT:FAIL");
// highest or lowest marks:
let highest = marks[0];
let lowest = marks[0];
for(let i=1;i<marks.length;i++){
    if(marks[i]>highest){
        highest = marks[i];
    }
    else if(marks[i]<lowest){
        lowest = marks[i];
    }
}
console.log("Highest: ",highest);
console.log("Lowest: ",lowest);

// ROCK,PAPER,SCISSORS:

let choices = ["rock", "paper", "scissors"];

let userScore = 0;
let computerScore = 0;

for (let i = 1; i <= 5; i++) {

    console.log("ROUND:", i);

    let userChoice = prompt("Enter rock, paper or scissors:");

    if (userChoice === null) {
        console.log("Game cancelled!");
        break;
    }

    userChoice = userChoice.toLowerCase().trim();

    if (!choices.includes(userChoice)) {
        console.log("Invalid choice! Try again.");
        i--;
        continue;
    }

    let randomIndex = Math.floor(Math.random() * 3);
    let computerChoice = choices[randomIndex];

    console.log("Your choice:", userChoice);
    console.log("Computer choice:", computerChoice);

    if (userChoice === computerChoice) {
        console.log("It's a tie!");
    }

    else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log("You win this round!");
        userScore++;
    }

    else {
        console.log("Computer wins this round!");
        computerScore++;
    }

    console.log("Your score:", userScore);
    console.log("Computer score:", computerScore);
}

console.log("----- FINAL RESULT -----");

console.log("Your final score:", userScore);
console.log("Computer final score:", computerScore);

if (userScore > computerScore) {
    console.log("Congratulations! You won the game!");
}
else if (computerScore > userScore) {
    console.log("Computer won the game!");
}
else {
    console.log("The game is a tie!");
}
