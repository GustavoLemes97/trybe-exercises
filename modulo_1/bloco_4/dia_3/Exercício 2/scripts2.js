let n = 5;
let asteriscos = '';

for (let index = 1; index <= n; index += 1) {
  for (let index2 = 1; index2 <= index; index2 += 1) {
    asteriscos += '*';
  }
  console.log(asteriscos);
  asteriscos = '';
}
