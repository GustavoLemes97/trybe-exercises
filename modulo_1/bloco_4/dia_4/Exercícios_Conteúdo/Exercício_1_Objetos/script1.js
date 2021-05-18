let Player = {
  name: 'Marta',
  lastName: 'Silva',
  age: 34,
  medals: {
    golden: 2,
    silver: 3,
  },
  bestInTheWorld: [2006, 2007, 2008, 2009, 2010, 2018],
};

console.log(
  'A jogadora ' +
    Player.name +
    ' ' +
    Player.lastName +
    ' tem ' +
    Player.age +
    ' anos de idade.',
);

console.log(
  'A jogadora ' +
    Player.name +
    ' ' +
    Player.lastName +
    ' foi eleita a melhor do mundo por ' +
    Player.bestInTheWorld.length +
    ' vezes.',
);

console.log(
  'A jogadora possui ' +
    Player.medals.golden +
    ' medalhas de ouro e ' +
    Player.medals.silver +
    ' medalhas de prata.',
);
