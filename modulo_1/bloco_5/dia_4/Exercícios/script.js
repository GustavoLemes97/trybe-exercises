const docBody = document.querySelector('body');
const docAside = document.querySelector('aside');

function generateButtons(buttonName) {
  const btn = document.createElement('button');;
  btn.innerText = buttonName;
  docAside.appendChild(btn);
}

generateButtons('Fundo Azul');
generateButtons('Fundo Vermelho');
generateButtons('Fundo Amarelo');

generateButtons('Texto Azul');
generateButtons('Texto Vermelho');
generateButtons('Texto Amarelo');

generateButtons('Tamanho da Fonte: 10');
generateButtons('Tamanho da Fonte: 20');
generateButtons('Tamanho da Fonte: 30');

generateButtons('Espaço Entre Linhas: 1');
generateButtons('Espaço Entre Linhas: 2');
generateButtons('Espaço Entre Linhas: 3');

generateButtons('Fonte: Courier New');
generateButtons('Fonte: Gill Sans');
generateButtons('Fonte: Impact');


