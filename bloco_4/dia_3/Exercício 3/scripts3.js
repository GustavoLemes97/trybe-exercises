let n = 5;
let asteriscos = '';

for (let index = 1; index <= n; index += 1) {
  for (let index2 = n; index2 >= index; index2 -= 1) {
    if (index2 === index) {
      for (let index3 = 1; index3 <= index2; index3 += 1) {
        asteriscos += '*';
      }
    } else {
      asteriscos += ' ';
    }
  }
  console.log(asteriscos);
  asteriscos = '';
}
