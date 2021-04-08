const game = new Game();

const turn = new Turn();

const grace = new Fighter();
const ulder = new Paladin();
const moana = new Monk();
const draven = new Berzerker();
const carl = new Assassin();

const allPlayer = [grace, ulder, moana, draven, carl]

let oppressor = carl;
let victim;
let choice;
let loser = 0;
let attack = 0

turn.gameTurn();
