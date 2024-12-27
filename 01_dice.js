const numberOfPlayers = +prompt('enter number of players : ', '2');
for (let player = 1; player <= numberOfPlayers; player++) {
  console.log('player :' + player);
  prompt('press enter to roll the dice : ');
  let diceNumber = Math.round(Math.random() * 6);

  while (diceNumber === 0) {
    diceNumber = Math.round(Math.random() * 6);
  }

  console.log(diceNumber);
}

