/** ------------------------------01----------------------------------- */
const fatorial = (number) => {
  return number === 1 ? 1 : number * fatorial(number - 1);
};

console.log(fatorial(6));

/** ------------------------------02----------------------------------- */
const longestWord = (frase) => {
  const fraseArr = frase.split(' ');

  return fraseArr.sort((a, b) => a.length - b.length)[fraseArr.length - 1];
};
const frase = 'Antônio foi no banheiro e não sabemos o que aconteceu';

console.log(longestWord(frase));

/** ------------------------------03----------------------------------- */

const clickCounterBtn = document.querySelector('#clickCounterBtn');

clickCounterBtn.addEventListener('click', () => {
  const showCounter = document.querySelector('#clickCounter');
  const clickCount = parseInt(showCounter.innerText);

  showCounter.innerText = clickCount + 1;
});

/** ------------------------------04----------------------------------- */

const replaceX = (stringDeterminada) => {
  let frase = 'Tryber x aqui!';

  return frase.replace('x', stringDeterminada);
};

const concatSkills = (frase) => {
  const skills = ['Java', 'React', 'Python', 'Git', 'HTML'];

  return `${frase} Minhas cinco principais habilidades são: ${skills.sort()} `;
};

console.log(concatSkills(replaceX('Gustavo')));
