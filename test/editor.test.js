const assert = require('assert');
const Editor = require('../js/editor');

const markdown = { toHTML: (s) => `HTML:${s}` };
const input = { value: 'hi' };
const preview = {};

const editor = new Editor(input, preview, markdown);

assert.strictEqual(input.editor, editor);
assert.strictEqual(preview.innerHTML, 'HTML:hi');

input.value = 'changed';
editor.update();
assert.strictEqual(preview.innerHTML, 'HTML:changed');

console.log('editor tests passed');
