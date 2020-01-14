class Game {
  constructor() {
    this.inProgress = true;
    this.winner = null;
    this.currentTurn = Game.O;
    this.movesMade = 0;
    this.boxes = new Array(9).fill().map(s => new Box());
  }
}

Game.O = 'O';
Game.X = 'X';
