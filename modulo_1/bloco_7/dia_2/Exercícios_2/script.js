const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

/** ------------------------------01----------------------------------- */
function addKey(objeto, keyName, keyValue) {
  objeto[keyName] = keyValue;
}

addKey(lesson2, 'turno', 'manhã');
console.log(lesson2);

/** ------------------------------02----------------------------------- */
function listKeys(objeto) {
  return Object.keys(objeto);
}

console.log(`Lesson 1 keys: ${listKeys(lesson1)}`);
console.log(`Lesson 2 keys: ${listKeys(lesson2)}`);
console.log(`Lesson 3 keys: ${listKeys(lesson3)}`);

/** ------------------------------03----------------------------------- */
function objectSize(objeto) {
  return Object.keys(objeto).length;
}

console.log(`Lesson 1 size: ${objectSize(lesson1)}`);
console.log(`Lesson 2 size: ${objectSize(lesson2)}`);
console.log(`Lesson 3 size: ${objectSize(lesson3)}`);

/** ------------------------------04----------------------------------- */
function objectValues(objeto) {
  return Object.values(objeto);
}

console.log(`Lesson 1 values: ${objectValues(lesson1)}`);
console.log(`Lesson 2 values: ${objectValues(lesson2)}`);
console.log(`Lesson 3 values: ${objectValues(lesson3)}`);

/** ------------------------------05----------------------------------- */
const allLessons = {};

allLessons['lesson1'] = Object.assign({},lesson1);
allLessons['lesson2'] = Object.assign({},lesson2);
allLessons['lesson3'] = Object.assign({},lesson3);

console.log(allLessons);

/** ------------------------------06----------------------------------- */
function totalStudents(objeto) {
  const objectLenght = objectSize(objeto);
  let sumStudents = 0;

  for(let index = 0; index < objectLenght; index += 1) {
   sumStudents += objeto[`lesson${index + 1}`].numeroEstudantes;
  }
  return sumStudents;
}

console.log(`Total de Estudantes: ${totalStudents(allLessons)}.`);

/** ------------------------------07----------------------------------- */
function objectValue(objeto, index) {
  return `Output: ${Object.values(objeto)[index]}`
}

console.log(objectValue(lesson1, 0));

/** ------------------------------08----------------------------------- */
function verifyPair(objeto, objKey, objValue) {
  return Object.keys(objeto).includes(objKey) && objeto[objKey] === objValue ? true : false;
}

console.log(verifyPair(lesson3, 'turno', 'noite'));
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));