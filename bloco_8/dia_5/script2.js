const assert = require('assert');

const sum = (...args) => {
  let summation = 0;
  args.forEach(element => summation += element);
  return summation;
}

assert.strictEqual(sum(), 0);
assert.strictEqual(sum(1), 1);
assert.strictEqual(sum(1, 2), 3);
assert.strictEqual(sum(1, 2, 3), 6);
assert.strictEqual(sum(1, 2, 3, 4), 10);