/**--------------------------------1----------------------------------- */

let n = 5;
let asteriscos = '*';
let vazio;
let vazioInterno;

for (
  let index = 1, auxIndex = -2;
  index <= Math.round(n / 2);
  index += 1, auxIndex += 1
) {
  if (index === Math.round(n / 2)) {
    asteriscos = '*'.repeat(index * 2 - 1);
    console.log(asteriscos);
  } else if (index === 1) {
    vazio = ' '.repeat(Math.round(n / 2) - index);
    console.log(vazio + asteriscos);
  } else if (index === 2) {
    vazio = ' '.repeat(Math.round(n / 2) - index);
    vazioInterno = ' ';
    console.log(vazio + asteriscos + vazioInterno + asteriscos);
  } else {
    vazio = ' '.repeat(Math.round(n / 2) - index);
    vazioInterno = ' '.repeat(index + auxIndex);

    console.log(vazio + asteriscos + vazioInterno + asteriscos);
  }
}

/**--------------------------------2----------------------------------- */

let number = 150;
let count = 0;
for (let index = 1; index <= number; index += 1) {
  if (number % index == 0) {
    count += 1;
  }
}

if (count === 2 && number != 1) {
  console.log('É um número primo!');
} else {
  console.log('Não é um número primo');
}
