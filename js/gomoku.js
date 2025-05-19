class Gomoku {
  constructor(size = 19) {
    if (size < 10) {
      throw new Error('board size must be >= 10');
    }
    this.size = size;
    this.board = Array.from({ length: size }, () => Array(size).fill(0));
    this.currentPlayer = 1;
  }

  place(x, y) {
    if (x < 0 || x >= this.size || y < 0 || y >= this.size) {
      throw new Error('out of bounds');
    }
    if (this.board[y][x] !== 0) {
      throw new Error('cell already occupied');
    }
    this.board[y][x] = this.currentPlayer;
    const won = this.checkWin(x, y);
    if (!won) {
      this.currentPlayer = this.currentPlayer === 1 ? 2 : 1;
    }
    return won;
  }

  checkWin(x, y) {
    const player = this.board[y][x];
    const directions = [
      [1, 0], [0, 1], [1, 1], [1, -1]
    ];
    for (const [dx, dy] of directions) {
      let count = 1;
      for (const dir of [1, -1]) {
        let nx = x + dx * dir;
        let ny = y + dy * dir;
        while (
          nx >= 0 && nx < this.size &&
          ny >= 0 && ny < this.size &&
          this.board[ny][nx] === player
        ) {
          count++;
          nx += dx * dir;
          ny += dy * dir;
        }
      }
      if (count >= 5) {
        return true;
      }
    }
    return false;
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = Gomoku;
}
