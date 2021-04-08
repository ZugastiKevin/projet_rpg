class Game {
  constructor (turnLeft = 10) {
    this.turnLeft = turnLeft;
  };

  newTurn () {
    this.turnLeft = this.turnLeft - 1;
    if (this.turnLeft == 0) {
      let max = Math.max(...allPlayer.map(({ hp }) => hp));
      let maxHp = allPlayer.find(({ hp }) => hp === max);
      console.log(maxHp.name, maxHp.hp, maxHp.status = "Winner");
      turn.watchStats();
      console.log("Thx for playing :)\n if you need to play again press f5");
    }
    else if (this.turnLeft >= 1) {
      turn.gameTurn();
    };
  };

  haveWinner () {
  };

  watchStats () {
    console.log("#####################################################################");
    console.log(grace.stats());
    console.log("#####################################################################");
    console.log(ulder.stats());
    console.log("#####################################################################");
    console.log(moana.stats());
    console.log("#####################################################################");
    console.log(draven.stats());
    console.log("#####################################################################");
    console.log(carl.stats());
    console.log("#####################################################################");
  };
};