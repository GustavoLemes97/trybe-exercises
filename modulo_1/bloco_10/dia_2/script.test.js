const { uppercase, getUserName, getRepos, getAnimal } = require('./script');

describe(`Teste função uppercase()`, () => {
  it(`Verifica se retorna a 'Gugu' maiúsculo`, () => {
    let word = 'gugu';
    uppercase(word, (string) => {
      word = string;
    });
    expect(word).toBe('GUGU');
  });
});

describe(`Teste  função getUserName()`, () => {
  it(`Verifica se usuário com id '4' é { name: 'Mark' }`, () => {
    expect.assertions(1);
    return expect(getUserName(4)).resolves.toEqual('Mark');
  });

  it(`Verifica se usuário com id '6' retorna erro`, () => {
    expect.assertions(1);
    return expect(getUserName(6)).rejects.toEqual({
      error: 'User with 6 not found.',
    });
  });
});

describe(`Teste  função getUserName(userId) com async/ await`, () => {
  it(`Verifica se usuário com id '4' é { name: 'Mark' }`, async () => {
    expect.assertions(1);
    const userName = await getUserName(4);
    expect(userName).toEqual('Mark');
  });

  it(`Verifica se usuário com id '6' retorna erro`, async () => {
    expect.assertions(1);
    let userName;

    try {
      userName = await getUserName(6);
    } catch (e) {
      expect(e).toEqual({ error: 'User with 6 not found.' });
    }
  });
});

describe(`Teste  função getRepos(url)`, () => {
  it(`Verifica se o repositório 'sd-01-week4-5-project-todo-list' se encontra na lista`, () => {
    return expect(
      getRepos('https://api.github.com/orgs/tryber/repos'),
    ).resolves.toContain('sd-01-week4-5-project-todo-list');
  });

  it(`Verifica se o repositório 'sd-01-week4-5-project-meme-generator' se encontra na lista`, () => {
    return expect(
      getRepos('https://api.github.com/orgs/tryber/repos'),
    ).resolves.toContain('sd-01-week4-5-project-meme-generator');
  });
});

describe('Testando promise - findAnimalByName', () => {
  describe('Quando existe o animal com o nome procurado', () => {
    test('Retorne o objeto do animal', () => {
      expect.assertions(1);
      return getAnimal('Dorminhoco').then((animal) => {
        expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
      });
    });
  });

  describe('Quando não existe o animal com o nome procurado', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return getAnimal('Bob').catch((error) =>
        expect(error).toEqual('Nenhum animal com esse nome!'),
      );
    });
  });
});
