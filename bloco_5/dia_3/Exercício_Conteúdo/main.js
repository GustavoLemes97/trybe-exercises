const divUm = document.getElementById('divUm');
const divDois = document.getElementById('divDois');
const divTres = document.getElementById('divTres');
const input = document.getElementById('input');
const myWebpage = document.getElementById('mySpotrybefy');
const elementoA = document.createElement('a');
const elementBody = document.querySelector('body');
/*
1. Copie esse arquivo e edite apenas ele;
*/
/*
2. Crie uma função que adicione a classe 'tech' ao elemento selecionado;
2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
*/
function addTech(element) {
  document.querySelector('.tech').removeAttribute('class');
  element.target.className = 'tech';
}
/*
3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
com a classe 'tech';*/
function changeText() {
  document.querySelector('.tech').innerText = 'Tô mudado, sinhô!';
}
/*
4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
redirecione para alguma página;
4.1. Que tal redirecionar para seu portifólio?
*/
function gotToLink() {
  elementBody.insertBefore(elementoA, elementBody.childNodes[2]);
  document.querySelector('a').appendChild(myWebpage);
  document.querySelector('a').setAttribute('href', 'https://www.betrybe.com/');
  document.querySelector('a').setAttribute('target', '_blank');
  document.querySelector('a').style.color = 'white';
  document.querySelector('a').style.textDecoration = 'none';
}

/*
5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
a cor do mesmo;
*/
function changeColor(element) {
  element.target.style.color = 'green';
}
/*
Segue abaixo um exemplo do uso de event.target:
*/

function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

divUm.addEventListener('dblclick', resetText);

divUm.addEventListener('click', addTech);
divDois.addEventListener('click', addTech);
divTres.addEventListener('click', addTech);

input.addEventListener('keyup', changeText);

myWebpage.addEventListener('click', gotToLink);

myWebpage.addEventListener('mouseover', changeColor);
// Não precisa passar o parâmetro dentro do addEventListener. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'divUm'.
