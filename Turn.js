class Turn extends Game {
  constructor (turnLeft) {
    super(turnLeft);
  };

  startTurn () {
    return `It's turn ${this.turnLeft}.`;
  };

  declareOppressor () {
    if (oppressor == grace) {
      oppressor = ulder;
    }
    else if (oppressor == ulder) {
      oppressor = moana;
    }
    else if (oppressor == moana) {
      oppressor = draven;
    }
    else if (oppressor == draven) {
      oppressor = carl;
    }
    else if (oppressor == carl) {
      oppressor = grace;
    }
    else {
      turn.declareOppressor();
    }
    turn.oppressorIsAlive();
  };

  oppressorIsAlive () {
    if (oppressor.status == "loser") {
      turn.declareOppressor();
    }
    else if (loser >= 4) {
      console.log("Thx for playing :)\n if you need to play again press f5");
    };
  };

  declareVictim () {
    let declareVictimEval = window.prompt(`You are the Oppressor: ${oppressor.name}\n Selecte your victim. grace, ulder, moana, draven, carl`);
    let declareVictim = declareVictimEval.toLowerCase();

    if (declareVictim == "grace" && grace.status == "playing") {
      victim = grace;
    }
    else if (declareVictim == "ulder" && ulder.status == "playing") {
      victim = ulder;
    }
    else if (declareVictim == "moana" && moana.status == "playing") {
      victim = moana;
    }
    else if (declareVictim == "draven" && draven.status == "playing") {
      victim = draven;
    }
    else if (declareVictim == "carl" && carl.status == "playing") {
      victim = carl;
    }
    else {
      turn.declareVictim();
    }
    if (oppressor == victim) {
      alert("Seriously ? Victim not your self !");
      turn.declareVictim();
    };
  };

  specialOrBasic () {
    let choice = window.prompt(`You are the Oppressor: ${oppressor.name}\n - 1 Basic Attack \n - 2 Advanced Attack ${oppressor.special}\n Choose wisely.`);

    if (choice == 1) {
      victim.takeDamage(oppressor.dmg);
      console.log(oppressor.dealDamage(victim));
    }
    else if (choice == 2) {
      oppressor.specialL();
      victim.takeDamage((oppressor.dmg + oppressor.advanced));
      console.log(oppressor.dealSpecialDamage(victim));
    }
    else {
      game.specialOrBasic();
    };
  };


  gameTurn () {
    console.log(turn.startTurn());
    turn.watchStats();
    turn.declareOppressor();
    turn.declareVictim();
    turn.specialOrBasic();
    turn.newTurn();
  };
};