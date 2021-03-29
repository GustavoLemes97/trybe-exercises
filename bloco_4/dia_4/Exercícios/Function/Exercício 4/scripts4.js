function nameMaxCaracter(arrName) {
  let name_max_caracter = arrName[0];
  for (let index = 1; index < arrName.length; index += 1) {
    if (name_max_caracter.length < arrName[index].length) {
      name_max_caracter = arrName[index];
    }
  }
  return name_max_caracter;
}
