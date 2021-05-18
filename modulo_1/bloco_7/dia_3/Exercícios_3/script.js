const assert = require('assert');

/** ------------------------------01----------------------------------- */
const greetPeople = (people) => {
  let greeting = 'Hello ';

  for (let index = 0; index < people.length; index += 1) {
    people[index] = `${greeting}${people[index]}`;
  }
  return people;
};

const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];

//assert.deepStrictEqual(greetPeople(parameter), result);

/** ------------------------------02----------------------------------- */
const removeVowels = (word) => {
  let count = 1;
  let results = word.slice();

  for (let index = 0; index < results.length; index += 1) {
    let characters = results[index];
    if (
      characters === 'a' ||
      characters === 'o' ||
      characters === 'i' ||
      characters === 'e' ||
      characters === 'u'
    ) {
      results = results.replace(characters, count);
      count += 1;
    }
  }
  return results;
};

const parameter2 = 'Dayane';
const result2 = 'D1y2n3';

//assert.deepStrictEqual(removeVowels(parameter2), result2);

/** ------------------------------03----------------------------------- */
const greaterThanTen = (array) => {
  let results = [];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > 10) {
      results.push(array[index]);
    }
  }
  return results;
};

const parameter3 = [4, 10, 32, 9, 21];
const result3 = [32, 21];

//assert.deepStrictEqual(greaterThanTen(parameter3), result3);

/** ------------------------------04----------------------------------- */
function secondThirdSmallest(array) {
  let results = []
  array.sort(function (x, y) {
      return x - y;
  });
  results = [array[1], array[2]];
  return results;
};

const parameter4 = [4, 10, 32, 9, 21, 90, 5, 11, 8, 6];
const result4 = [5, 6];

//assert.deepStrictEqual(secondThirdSmallest(parameter4), result4);