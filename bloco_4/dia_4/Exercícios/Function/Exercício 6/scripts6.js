function summationOf(number) {
  let auxNumber = number;
  for (let index = 0; index < number; index += 1) {
    auxNumber = auxNumber + index;
  }
  return auxNumber;
}
