let n = 9;
let asteriscos;
let vazio;

for (let index = 1; index <= Math.round(n / 2); index += 1) {
  vazio = ' '.repeat(Math.round(n / 2) - index);
  asteriscos = '*'.repeat(index * 2 - 1);

  console.log(vazio + asteriscos);
}
