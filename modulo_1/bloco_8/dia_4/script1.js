
const assert = require('assert');

const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
];

function flatten(array) {
  return array.reduce((arr,element) => arr.concat(element));
}

assert.deepStrictEqual(flatten(arrays), ['1', '2', '3', true, 4, 5, 6]);