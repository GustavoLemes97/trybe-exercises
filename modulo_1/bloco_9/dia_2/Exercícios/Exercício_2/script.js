const createArray = () => {
  let arr = [];
  for(let index = 0; index < 10; index += 1) {
    arr.push(Math.floor((Math.random() * 49 + 1) ** 2));
  }
  return arr;
}

const promise = new Promise((resolve, reject) => {
  const randomArray = createArray();
  let summation = randomArray.reduce((acc, element) => acc + element);
  
  if (summation >= 8000) {
    return reject(`É mais de oito mil! Essa promise deve estar quebrada!`);
  }
  resolve(summation);
})
.then(data => {
  let arr = [2, 3, 5, 10];
  const result = arr.map(element => data / element);
  console.log(result);
  return result;
})
.then(divArray => console.log(divArray.reduce((acc, elemet) => acc + elemet)))
.catch(data => console.log(data));

