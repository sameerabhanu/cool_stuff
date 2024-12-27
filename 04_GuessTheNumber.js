// Assume rangeStart and rangeEnd are always greater than 0.
// rangeStart is always less than rangeEnd.
function number(rangeStart, rangeEnd) {
  let number = Math.ceil(Math.random() * rangeEnd);

  return number < rangeStart ? number + rangeStart : number;
}

function validateUserInput(rangeStart, rangeEnd, maxAttempts) {
  let userNumber = +prompt("Take a guess! (Remaining attempts: [ " + maxAttempts + " ])  ");

  if ('' + userNumber === 'NaN') {
    console.log("INVALID INPUT!! , please enter a number ");
    return validateUserInput(rangeStart, rangeEnd, maxAttempts);
  }
  
  return userNumber;
}

function validateUserNumber(userNumber, numberToGuess) {

  if (userNumber < numberToGuess) {
    return userNumber + " Too low! Try a higher number. ";
  }

  if (userNumber > numberToGuess) {
    return userNumber + " Too high! Try a smaller number.";
  }

}

function guessTheNumber(maxAttempts, numberToGuess, rangeStart, rangeEnd) {
  if (maxAttempts === 0) {
    console.log("OH NO! You've used all your attempts. Better luck next time!");
    console.log("The number is " + numberToGuess);
    return confirm('do you want to play again ');
  }

  let userNumber = validateUserInput(rangeStart, rangeEnd, maxAttempts);

  if (userNumber === numberToGuess) {
    console.log("WOW! You've nailed it. The number was " + numberToGuess);

    return confirm('do you want to play again ');
  }
  

  console.log(validateUserNumber(userNumber, numberToGuess));
  return guessTheNumber(maxAttempts - 1, numberToGuess);
}

function startGame(rangeStart, rangeEnd, maxAttempts) {
  console.log('Welcome to Guess the Number!');
  console.log('The secret number is between ' + rangeStart + ' and ' + rangeEnd + ' You have ' + maxAttempts + ' attempts to find it.');

  const numberToGuess = number(rangeStart, rangeEnd);
  const playAgain = guessTheNumber(maxAttempts, numberToGuess, rangeStart, rangeEnd);

  if (playAgain) {
    console.clear();
    startGame(rangeStart, rangeEnd, maxAttempts);
  } else {
    console.log('OK THANKYOU!!');
  }

}

console.clear();
startGame(100, 200, 6);
