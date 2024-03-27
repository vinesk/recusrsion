const fibs = require('./fibs');

describe('Tests de fibs', () => {
  test('doit retourner un tableau vide pour n = 0', () => {
    expect(fibs(0)).toEqual([]);
  });

  test('doit retourner [0] pour n = 1', () => {
    expect(fibs(1)).toEqual([0]);
  });

  test('doit calculer correctement les 5 premiers nombres', () => {
    expect(fibs(5)).toEqual([0, 1, 1, 2, 3]);
  });

  test('doit gérer de grands nombres', () => {
    expect(fibs(10)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
  });
});
