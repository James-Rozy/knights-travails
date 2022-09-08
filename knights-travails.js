const gameboard = require("./gameboard");

const knightMoves = (startCoord = [3, 3], goalCoord = [4, 3]) => {
  const chessboard = gameboard.chessboard();

  const fifo = [startCoord];
  while (fifo.length !== 0) {
    const currCoord = fifo.shift();
    if (currCoord[0] === goalCoord[0] && currCoord[1] === goalCoord[1]) break;

    const path = chessboard.findPath(currCoord[0], currCoord[1]);
    path.forEach((coordinate) => {
      if (chessboard.board[coordinate[0]][coordinate[1]] !== null) return;
      fifo.push(coordinate);
      chessboard.board[coordinate[0]][coordinate[1]] = [
        currCoord[0],
        currCoord[1],
      ];
    });
  }

  const path = [];
  let currCoord = goalCoord;
  while (currCoord[0] !== startCoord[0] || currCoord[1] !== startCoord[1]) {
    path.unshift(currCoord);
    currCoord = chessboard.board[currCoord[0]][currCoord[1]];
  }
  path.unshift(startCoord);

  console.log(`You made it in ${path.length} moves! Here's your path:`);
  console.log(path);
};

const main = (() => {
  knightMoves();
})();
