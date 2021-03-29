function checkPalindrome(word) {
  let aux;
  for (let index1 = 0; index1 < word.length; index1 += 1) {
    if (word[index1] === word[word.length - 1 - index1]) {
      return true;
    } else {
      return false;
    }
  }
}
