class Game {
  constructor() {
    this.reset();
  }

  reset() {
    this.inProgress = true;
    this.winner = null;
    this.currentTurn = Game.O;
    this.movesMade = 0;
    this.boxes = new Array(9).fill().map(s => new Box());
  }

  makeMove(i) {
    if (this.inProgress && !this.boxes[i].value) {
      this.boxes[i].value = this.currentTurn;

      this.movesMade++;
      this.checkForWinner();
      this.swapTurn();
    }
  }

  checkForWinner() {
    Game.winningCombinations.forEach(combination => {
      const [a, b, c] = combination;
      const boxA = this.boxes[a];
      const boxB = this.boxes[b];
      const boxC = this.boxes[c];
      if (
        boxA.value &&
        boxA.value === boxB.value &&
        boxA.value === boxC.value
      ) {
        this.inProgress = false;
        this.winner = boxA.value;
        boxA.isHighlighted = boxB.isHighlighted = boxC.isHighlighted = true;
      }
    });

    // check for tie
    if (this.movesMade === this.boxes.length) {
      this.inProgress = false;
    }
  }

  swapTurn() {
    this.currentTurn = this.currentTurn === Game.O ? Game.X : Game.O;
  }
}

Game.O = 'O';
Game.X = 'X';
Game.winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];
