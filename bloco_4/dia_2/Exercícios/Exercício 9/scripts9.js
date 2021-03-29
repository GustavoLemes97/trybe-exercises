let array_1_25 = [];
let division = [];

for (let index = 0; index < 25; index += 1) {
  array_1_25.push(index + 1);
  division.push(array_1_25[index] / 2);
}

console.log("Array dividido por 2: ", division);
