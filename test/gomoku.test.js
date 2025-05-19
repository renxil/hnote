const assert = require('assert');
const Gomoku = require('../js/gomoku');

const game = new Gomoku();
assert.ok(game.size >= 15, 'board should be large');

// sequence of moves leading to a win for player 1
const moves = [
  [0,0], [1,0],
  [0,1], [1,1],
  [0,2], [1,2],
  [0,3], [1,3],
  [0,4]
];
let won = false;
for (const [x,y] of moves) {
  won = game.place(x,y);
}
assert.strictEqual(won, true, 'player 1 should win');

console.log('gomoku tests passed');
