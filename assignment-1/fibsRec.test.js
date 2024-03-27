const fibsRec = require('./fibsRec');

describe('Tests de Fibonacci Recursif', () => {
  test('doit retourner un tableau vide pour n = 0', () => {
    expect(fibsRec(0)).toEqual([]);
  });

  test('doit retourner [0] pour n = 1', () => {
    expect(fibsRec(1)).toEqual([0]);
  });

  test('doit calculer correctement les 5 premiers nombres', () => {
    expect(fibsRec(5)).toEqual([0, 1, 1, 2, 3]);
  });

  test('doit gérer de grands nombres', () => {
    expect(fibsRec(10)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
  });
});
