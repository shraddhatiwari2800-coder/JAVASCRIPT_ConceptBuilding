let score = 0;
for (let i = 1; i <= 5; i++) {
    console.log("QUESTION:", i);
    // Generate two random numbers
    let num1 = Math.floor(Math.random() * 10) + 1;
    let num2 = Math.floor(Math.random() * 10) + 1;
    // Generate a random operator
    let operators = ["+", "-", "*"];
    let randomIndex = Math.floor(Math.random() * 3);
    let operator = operators[randomIndex];
    let correctAnswer;
    // Calculate the correct answer
    if (operator === "+") {
        correctAnswer = num1 + num2;
    }
    else if (operator === "-") {
        correctAnswer = num1 - num2;
    }
    else {
        correctAnswer = num1 * num2;
    }
    // Ask the user
    let userAnswer = Number(
        prompt(`What is ${num1} ${operator} ${num2}?`)
    );
    // Check the answer
    if (userAnswer === correctAnswer) {
        console.log("Correct answer! Well done!");
        score++;
    }
    else {
        console.log("Wrong answer!");
        console.log("Correct answer was:", correctAnswer);
    }
    console.log("Your current score:", score);
}
// Final result
console.log("----- GAME OVER -----");
console.log("Your final score:", score, "/ 5");
if (score === 5) {
    console.log("Excellent! Perfect score!");
}
else if (score >= 3) {
    console.log("Good job! Keep practising!");
}
else {
    console.log("Keep practising. You can do better!");
};
