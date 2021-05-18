let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
let media;

for (let index = 0; index < numbers.length; index += 1) {
  sum += numbers[index];
}

media = sum / 10;

if (media > 20) {
  console.log("Maior que 20");
} else {
  console.log("Menor ou igual a 20");
}
