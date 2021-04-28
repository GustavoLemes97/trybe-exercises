/** ------------------------------01----------------------------------- */
const assert = require('assert');
const addOne = (arr) => {
  let copyArr = arr.slice();

  for(let index = 0; index < copyArr.length; index +=1) {
    copyArr[index] += 1;
  }
  return copyArr;
};

const myArray = [31, 57, 12, 5];
const unchanged = [31, 57, 12, 5];
const expected = [32, 58, 13, 6];
const output = addOne(myArray);

//assert.strictEqual(typeof addOne, 'function');
//assert.deepStrictEqual(output, expected);
//assert.deepStrictEqual(myArray, unchanged);

/** ------------------------------02----------------------------------- */
const wordLengths = (words) => {
  let arrWordLengths = [];

  for(let index = 0; index < words.length; index +=1) {
    arrWordLengths.push(words[index].length);
  }

  return arrWordLengths;
};

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected2 = [3, 6, 10, 5];
const output2 = wordLengths(words);

//assert.strictEqual(typeof wordLengths, 'function');
//assert.deepStrictEqual(output2, expected2);

/** ------------------------------03----------------------------------- */
const sumAllNumbers = (arr) => {
  let sumAll = 0;
  for(let index = 0; index < arr.length; index +=1) {
    sumAll += arr[index];
  }
  return sumAll;
}

const numbers = [9, 23, 10, 3, 8];
const expected3 = 53;
const output3 = sumAllNumbers(numbers);

//assert.strictEqual(typeof sumAllNumbers, 'function');
//assert.strictEqual(output3, expected3);

/** ------------------------------04----------------------------------- */
const findTheNeedle = (words, needle) => {
  return words.indexOf(needle);
};

let words4 = ['house', 'train', 'slide', 'needle', 'book'];
let expected4 = 3;
let output4 = findTheNeedle(words4, 'needle');
//assert.strictEqual(output4, expected4);

words4 = ['plant', 'shelf', 'arrow', 'bird'];
expected4 = 0;
output4 = findTheNeedle(words4, 'plant');
//assert.strictEqual(output4, expected4);

words4 = ['plant', 'shelf', 'arrow', 'bird'];
expected4 = -1;
output4 = findTheNeedle(words4, 'plat');
//assert.strictEqual(output4, expected4);