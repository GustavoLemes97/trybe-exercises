// -----------------------------01-------------------------------
const uppercase = (str, callback) => {
  callback(str.toUpperCase());
};

// -----------------------------02/03-------------------------------
const users = {
  4: { name: 'Mark' },
  5: { name: 'Paul' },
};

const findUserById = (id) => {
  return new Promise((resolve, reject) => {
    if (users[id]) {
      return resolve(users[id]);
    }

    return reject({ error: 'User with ' + id + ' not found.' });
  });
};

const getUserName = (userID) => {
  return findUserById(userID).then((user) => user.name);
};

const fetch = require('node-fetch');

// -----------------------------04-------------------------------
const getRepos = (url) => {
  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      return data.map((repo) => repo.name);
    });
};

// -----------------------------06-------------------------------
const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByName = (name) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const animal = Animals.find((animal) => animal.name === name);
      if (animal !== undefined) {
        return resolve(animal);
      }

      return reject('Nenhum animal com esse nome!');
    }, 100);
  });

const getAnimal = (name) => findAnimalByName(name);

module.exports = {
  uppercase,
  getUserName,
  getRepos,
  getAnimal,
};
