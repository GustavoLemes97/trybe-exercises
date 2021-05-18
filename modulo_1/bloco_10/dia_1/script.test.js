const { 
  sum,
  myRemove,
  myRemoveWithoutCopy,
  myFizzBuzz,
} = require('./script');

/** ------------------------------01----------------------------------- */
describe(`Testando função sum(a, b)`, () => {
  it(`Teste se o retorno de sum(4, 5) é 9`, () => {
    expect(sum(4, 5)).toBe(9);
  });
  it(`Teste se o retorno de sum(0, 0) é 0`, () => {
    expect(sum(0, 0)).toBe(0);
  });
  it(`Teste se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5)`, () => {
    expect(() => { sum(4, '5') }).toThrow();
  });
  it(`Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")`, () => {
    expect(() => { sum(4, '5') }).toThrowError(new Error('parameters must be numbers'));
  });
});

/** ------------------------------02----------------------------------- */
describe('Testando função myRemove(arr, item)', () => {
  it(`Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado`, () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });
  it(`Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]`, () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });
  it(`Verifique se o array passado por parâmetro não sofreu alterações`, () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
  it(`Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado`, () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});

// /** ------------------------------03----------------------------------- */
describe('Testando função myRemoveWithoutCopy(arr, item)', () => {
  it(`Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado`, () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });
  it(`Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]`, () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });
  it(`Faça uma chamada para a função myRemoveWithoutCopy e verifique se o array passado por parâmetro sofreu alterações`, () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
  it(`Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado`, () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});

// /** ------------------------------04----------------------------------- */
describe('Testando função myFizzBuzz(num)', () => {
  it(`Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado`, () => {
    expect(myFizzBuzz(15)).toEqual('fizzbuzz');
  });
  it(`Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado`, () => {
    expect(myFizzBuzz(3)).toEqual('fizz');
  });
  it(`Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado`, () => {
    expect(myFizzBuzz(5)).toEqual('buzz');
  });
  it(`Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado`, () => {
    expect(myFizzBuzz(16)).toEqual(16);
  });
  it(`Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado`, () => {
    expect(myFizzBuzz('15')).toEqual(false);
  });
});

// /** ------------------------------05----------------------------------- */
describe('Testando Objetos', () => {
  const obj1 = {
    title: 'My Title',
    description: 'My Description',
  };
  
  const obj2 = {
    description: 'My Description',
    title: 'My Title',
  };
  
  const obj3 = {
    title: 'My Different Title',
    description: 'My Description',
  };

  it(`Testar se Objeto 1 e Objeto 2 são iguais`, () =>{
    expect(obj1).toEqual(obj2);
  });
  it(`Testar se Objeto 1 e Objeto 3 são iguais`, () =>{
    expect(obj1).not.toEqual(obj3);
  });
  it(`Testar se Objeto 2 e Objeto 3 são iguais`, () =>{
    expect(obj2).not.toEqual(obj3);
  });
});