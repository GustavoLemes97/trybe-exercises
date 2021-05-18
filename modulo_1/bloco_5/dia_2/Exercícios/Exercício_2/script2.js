/** -------------------------------01------------------------------------- */
let textH1 = document.createElement('h1');

textH1.innerText = 'Exercício 5.2 - JavaScript DOM';
document.querySelector('body').appendChild(textH1);

/** -------------------------------02------------------------------------- */
let div1 = document.createElement('div');

div1.className = 'main-content';
document.querySelector('body').appendChild(div1);

/** -------------------------------03------------------------------------- */
let div1Div = document.createElement('div');

div1Div.className = 'center-content';
document.querySelector('div').appendChild(div1Div);

/** -------------------------------04------------------------------------- */
let div1DivP = document.createElement('p');

div1DivP.innerText = 'Oliva, vulgo mineiro fake.';
document.querySelector('div.center-content').appendChild(div1DivP);

/** -------------------------------05------------------------------------- */
let div1Div2 = document.createElement('div');

div1Div2.className = 'left-content';
document.querySelector('div').appendChild(div1Div2);

/** -------------------------------06------------------------------------- */
let div1Div3 = document.createElement('div');

div1Div3.className = 'right-content';
document.querySelector('div').appendChild(div1Div3);

/** -------------------------------07------------------------------------- */
let div1Div2Img = document.createElement('img');

div1Div2Img.className = 'small-image';
div1Div2Img.setAttribute('src','https://picsum.photos/200');
div1Div2Img.setAttribute('target','Imagem Aleatória');
document.querySelector('div.left-content').appendChild(div1Div2Img);

/** -------------------------------08------------------------------------- */
let div1Div3Ul = document.createElement('ul');

document.querySelector('div.right-content').appendChild(div1Div3Ul);
for(let index = 1; index <= 10; index += 1){
    let div1Div3UlLi = document.createElement('li');
    div1Div3UlLi.innerText = index;   
    document.querySelector('ul').appendChild(div1Div3UlLi);
}

/** -------------------------------09------------------------------------- */

for(let index = 1; index <= 3; index += 1){
    let div1H3 = document.createElement('h3');
    div1H3.innerText = index + ' H3';
  /** ------10------ */  div1H3.className = 'description';/** ------10------ */
    document.querySelector('div.main-content').appendChild(div1H3);
}

/** -------------------------------11------------------------------------- */
textH1.className = 'title';

/** -------------------------------12------------------------------------- */
document.querySelector('div').removeChild(div1Div2);

/** -------------------------------13------------------------------------- */
document.querySelector('div').removeChild(div1Div3);

/** -------------------------------14------------------------------------- */
document.querySelector('div.center-content').style.backgroundColor = 'green';

/** -------------------------------15------------------------------------- */
let removeLi = document.querySelector('ul');
removeLi.removeChild(removeLi.childNodes[9])
removeLi.removeChild(removeLi.childNodes[8])