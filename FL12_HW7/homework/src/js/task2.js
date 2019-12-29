if (confirm('Do you want to play a game?')) {
  const rangeAdd = 4;
  const maxRounds = 3;
  const roundPrizes = [100, 50, 25];
  let maxRange = 8;
  let roundCoefficient = 1;
  let totalPrize = 0;
  let inGame = true;

  while (inGame) {
    let currentRound = 0;
    let userGuessed = false;
    const pocketLanded = Math.floor(Math.random() * (maxRange + 1));
    while (!userGuessed && currentRound < maxRounds) {
      console.log(pocketLanded);
      let userAnswer = +prompt(
        `Guess a pocket number on which ball landed from 0 to ${maxRange}
				Attempts left: ${maxRounds - currentRound}
				Total prize: ${totalPrize}$
				Possible prize on current attempt: ${roundPrizes[currentRound] *
          roundCoefficient}$`
      );
      if (userAnswer === pocketLanded) {
        userGuessed = true;
        totalPrize += roundPrizes[currentRound] * roundCoefficient;
      }
      currentRound++;
    }
    if (userGuessed) {
      inGame = confirm(
        `Congratulation, you won! Your prize is: ${totalPrize}$\nDo you want to continue?`
      );
      maxRange += rangeAdd;
      roundCoefficient *= 2;
    } else {
      inGame = false;
    }
    if (!inGame) {
      alert(`Thank you for your participation. Your prize is: ${totalPrize}$`);
      inGame = confirm('Do you want to play again?');
      totalPrize = 0;
      maxRange = 8;
      roundCoefficient = 1;
    }
  }
} else {
  alert('You did not become a billionaire, but can.');
}
