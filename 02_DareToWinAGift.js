function intro(name) {
  console.log(" Hii!" + name);
  console.log(" The Game is 'DARE TO WIN THE GIFT'  ");
  console.log();
  console.log("               ________LET'S START THE GAME ________");
  console.log();
  console.log(" Sameera has a gift for you but to win the gift you need to tell her the number which matches with the number she has. ");
  console.log(" You will get a random Number between 0 and 10 ");
  console.log(" You will have 2 chances to match the number  ");
  console.log();
  console.log(" If you didn't match the number in 2 chances you will be killed very cruely!!!");
  console.log();

}

function matchNumber(number1, maxAttempts) {
  prompt(' please press enter to get a number ');
  console.log(' 🎁');
  const number = Math.floor(Math.random() * 10);
  console.log();
  console.log(" You got " + number);
  console.log();
  console.log('    ....Lets check if it is matched ....    ');
  console.log();
  
  if (number === number1) {
    console.log(" HURREY!!! You won the gift ");
    console.log(" The Gift is YUMMY  BIRYANII🍗🍽️!!!");
    console.log();
    console.log(" And There is a surpise for you ");
    const surpise = confirm(" Do You want to know the SURPRISE!! ");
    
    if (surpise) {
      console.log(" The Biryani is made by SAMEERA😁 ");
    } else {
      console.log("You are UNLUCKY!!!");
    }
    return ;
    
  } else {
    maxAttempts--;
  }
  
  if (maxAttempts === 1) {
    console.log("                    MISMATCH 😥");
    console.log(" OH NO!!! You have only one attempt to play the game ");
    return matchNumber(number1, maxAttempts);
  }
  
  if (maxAttempts === 0) {
    console.log("                         MISMATCH 😥");
    console.log(" OH NOOO!!! The number is " + number1);
    console.log();
    console.log(" You are taken into a dark room where there is a ghost👻 ");
    console.log(" The devil cut your head with knife and your blood is bleeding ");
    console.log(" You got killed by the 👻 ");
    console.log();
    console.log(" Better luck in your next life!!! ");
    console.log();
    console.log("                               🪦RIP🪦");
    console.log();
  }
}

function guessTheNumber() {
  const name = prompt(' Please enter your name  : ');
  intro(name);
  const startGame = confirm(" Are you dare enough to win the gift ? ");

  if (startGame) {
    console.clear();
    const number1 = Math.floor(Math.random() * 10);
    matchNumber(number1, 2);
    const playAgain = confirm(" DO YOU WANT TO PLAY AGAIN ");

    if(playAgain){
      console.clear();
      guessTheNumber();
    }

  } else {
    console.log("OK THANKYOU BYE!!!");
  }

}

console.clear();
guessTheNumber();