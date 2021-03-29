function checkEndWord(word, ending) {
  let countEquality = 0;
  word = word.slice(word.length - ending.length, word.length);

  for (let index = 0; index < word.length; index += 1) {
    if (word[index] === ending[index]) {
      countEquality += 1;
    }
  }
  if (countEquality == ending.length) {
    return true;
  } else {
    return false;
  }
}
