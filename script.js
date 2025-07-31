// Start of the game loop
let playAgain = true;

while (playAgain) {
  let randomNumber = Math.floor(Math.random() * 10) + 1;
  // console.log for testing only (remove if not allowed)
  console.log("Secret number is: " + randomNumber);

  let guessCount = 0;
  let userGuess = 0;

  while (userGuess !== randomNumber) {
    let input = prompt("Enter a number between 1 and 10:");
    userGuess = parseInt(input);
    guessCount++;

    if (userGuess > randomNumber) {
      alert("Your guess is too high. Guess again.");
    } else if (userGuess < randomNumber) {
      alert("Your guess is too low. Guess again.");
    } else if (userGuess === randomNumber) {
      alert("Correct! You guessed the number in " + guessCount + " guesses.");
      document.getElementById("message").innerHTML =
        "The correct number was: " + randomNumber;
    } else {
      alert("Invalid input. Please enter a number.");
    }
  }

  // Ask if the user wants to play again
  let playInput = prompt("Do you want to play again? (yes or no)");
  if (playInput.toLowerCase() !== "yes") {
    playAgain = false;
    alert("Thanks for playing!");
  }
}
