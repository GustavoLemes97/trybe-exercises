const btnSubmit = document.querySelector('#submit-btn');
const name = document.querySelector('#input-name');
const email = document.querySelector('#input-email');
const cpf = document.querySelector('#input-cpf');
const address = document.querySelector('#input-address');
const city = document.querySelector('#input-city');
const state = document.querySelector('#select-state');
const home = document.querySelector('#input-home');
const apartment = document.querySelector('#input-apartment');

function fillStates() {
  const states = [
    'AC',
    'AL',
    'AP',
    'AM',
    'BA',
    'CE',
    'DF',
    'ES',
    'GO',
    'MA',
    'MT',
    'MS',
    'MG',
    'PA',
    'PB',
    'PE',
    'PI',
    'RJ',
    'RN',
    'RS',
    'RO',
    'RR',
    'SC',
    'SP',
    'SE',
    'TO',
  ];
  const selectStates = document.querySelector('select');

  for (let index = 0; index < states.length; index += 1) {
    const createOptionStates = document.createElement('option');

    createOptionStates.innerText = states[index];
    createOptionStates.setAttribute('value', states[index]);
    selectStates.appendChild(createOptionStates);
  }
}

function createData(data) {
  const createPData = document.createElement('p');
  createPData.innerText = data;
  return createPData;
}

btnSubmit.addEventListener('click', function (event) {
  const sectionTag = document.querySelector('section');
  const radioInput = document.getElementsByName('tipo');

  sectionTag.appendChild(createData(name.value));
  sectionTag.appendChild(createData(email.value));
  sectionTag.appendChild(createData(cpf.value));
  sectionTag.appendChild(createData(address.value));
  sectionTag.appendChild(createData(city.value));
  if (radioInput[0].checked) {
    sectionTag.appendChild(createData(radioInput[0].value));
  } else if (radioInput[0].checked) {
    sectionTag.appendChild(createData(radioInput[1].value));
  }
  sectionTag.classList.remove('hideSection');
  event.preventDefault();
});

window.onload = fillStates;
