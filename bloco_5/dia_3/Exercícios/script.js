function createDaysOfTheWeek() {
  const weekDays = [
    'Domingo',
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sábado',
  ];
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

const dezDaysList = [
  29,
  30,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
  26,
  27,
  28,
  29,
  30,
  31,
];

for (let index = 0; index < 33; index += 1) {
  let createLiDay = document.createElement('li');
  createLiDay.innerText = dezDaysList[index];
  if (
    (dezDaysList[index] === 24) |
    (dezDaysList[index] === 25) |
    (dezDaysList[index] === 31)
  ) {
    createLiDay.classList.add('holiday');
  }
  if (
    (dezDaysList[index] === 4) |
    (dezDaysList[index] === 11) |
    (dezDaysList[index] === 18) |
    (dezDaysList[index] === 25)
  ) {
    createLiDay.classList.add('friday');
  }
  createLiDay.classList.add('day');

  document.querySelector('#days').appendChild(createLiDay);
}

const btnHolidays = document.createElement('button');

btnHolidays.innerText = 'Feriados';
document.querySelector('.buttons-container').appendChild(btnHolidays);
btnHolidays.setAttribute('id', 'btn-holiday');

let checkBtn = false;

btnHolidays.addEventListener('click', () => {
  if (checkBtn === false) {
    for (
      let index = 0;
      index < document.getElementsByClassName('holiday').length;
      index += 1
    ) {
      document.getElementsByClassName('holiday')[index].style.backgroundColor =
        'white';
    }
    checkBtn = true;
  } else {
    for (
      let index = 0;
      index < document.getElementsByClassName('holiday').length;
      index += 1
    ) {
      document.getElementsByClassName('holiday')[index].style.backgroundColor =
        'rgb(238,238,238)';
    }
    checkBtn = false;
  }
});

const btnfridays = document.createElement('button');
let checkBtn2 = false;

btnfridays.innerText = 'Sexta-Feira';
document.querySelector('.buttons-container').appendChild(btnfridays);
btnHolidays.setAttribute('id', 'btn-friday');

btnfridays.addEventListener('click', () => {
  if (checkBtn2 === false) {
    for (
      let index = 0;
      index < document.getElementsByClassName('friday').length;
      index += 1
    ) {
      document.getElementsByClassName('friday')[index].innerText =
        'SEXTOU!!!!!';
    }
    checkBtn2 = true;
  } else {
    for (
      let index = 0;
      index < document.getElementsByClassName('friday').length;
      index += 1
    ) {
      document.getElementsByClassName('friday')[0].innerText = 4;
      document.getElementsByClassName('friday')[1].innerText = 11;
      document.getElementsByClassName('friday')[2].innerText = 18;
      document.getElementsByClassName('friday')[3].innerText = 25;
    }
    checkBtn2 = false;
  }
});

function zoomIn(element) {
  element.target.style.fontSize = '30px';
}

function zoomOut(element) {
  element.target.style.fontSize = '20px';
}

document.querySelector('#days').addEventListener('mouseover', zoomIn);
document.querySelector('#days').addEventListener('mouseout', zoomOut);

const task = document.createElement('span');

task.innerText = 'Projeto: ';
document.querySelector('.my-tasks').appendChild(task);

const divTask = document.createElement('div');

divTask.style.backgroundColor = 'green';
divTask.className = 'task';
document.querySelector('.my-tasks').appendChild(divTask);

function taskSelected(element){
    element.target.classList.add('selected');
}

divTask.addEventListener('click',taskSelected);
