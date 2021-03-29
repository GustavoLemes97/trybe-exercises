function indexOfMaxNumber(arr) {
  let maxNumber = arr[0];
  let auxIndex = 0;
  for (let index = 1; index < arr.length; index += 1) {
    if (maxNumber < arr[index]) {
      maxNumber = arr[index];
      auxIndex = index;
    }
  }
  return auxIndex;
}
