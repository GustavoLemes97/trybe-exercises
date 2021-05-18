let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

let info2 = {
  personagem: 'Tio Patinhas',
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: 'O último MacPatinhas',
  recorrente: 'Sim',
};

let arrAux = [];

console.log('Bem-vinda, ' + info.personagem);

info.recorrente = 'Sim';

console.log(info);

for (let keys in info) {
  console.log(keys);
  arrAux.push(keys);
}

for (let keys in info) {
  console.log(info[keys]);
}

console.log(
  info.personagem +
    ' e ' +
    info2.personagem +
    '\n' +
    info.origem +
    ' e ' +
    info2.origem +
    '\n' +
    info.nota +
    ' e ' +
    info2.nota +
    '\n' +
    'Ambos ' +
    arrAux[3],
);
