const chessboard = (size = 8) => {
  const board = [];
  for (let i = 0; i < size; i++) {
    const row = [];
    for (let j = 0; j < size; j++) row.push(null);
    board.push(row);
  }

  const checkCoordinate = (x, y) => {
    if (x > -1 && x < size && y > -1 && y < size) return true;
    return false;
  };

  const knightMoves = [
    [1, 2],
    [1, -2],
    [-1, 2],
    [-1, -2],
    [2, 1],
    [2, -1],
    [-2, 1],
    [-2, -1],
  ];

  const findPath = (x, y) => {
    return knightMoves
      .map((coordinate) => [x + coordinate[0], y + coordinate[1]])
      .filter((coordinate) => checkCoordinate(coordinate[0], coordinate[1]));
  };

  return { board, checkCoordinate, findPath };
};

module.exports = {
  chessboard,
};
