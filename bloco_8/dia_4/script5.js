const assert = require('assert');

const names = [
  'Aanemarie',
  'Adervandes',
  'Akifusa',
  'Abegildo',
  'Adicellia',
  'Aladonata',
  'Abeladerco',
  'Adieidy',
  'Alarucha',
];

function containsA(array) {
  return array.reduce((summation, element) => {
    let soma = 0;
    element
      .split('')
      .forEach((elementForEach) =>
        elementForEach == 'A' || elementForEach == 'a' ? (soma += 1) : soma,
      );
    return summation + soma;
  }, 0);
}

assert.deepStrictEqual(containsA(names), 20);
