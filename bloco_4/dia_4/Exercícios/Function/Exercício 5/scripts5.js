function maxRepeatNumber(arrNumbers) {
  let number;
  let auxArr = [];
  for (let index1 = 0; index1 < arrNumbers.length; index1 += 1) {
    let countNumber = 0;
    number = arrNumbers[index1];
    for (let index2 = 0; index2 < arrNumbers.length; index2 += 1) {
      if (number === arrNumbers[index2]) {
        countNumber += 1;
      }
    }
    auxArr[countNumber] = number;
  }
  return auxArr[auxArr.length - 1];
}
