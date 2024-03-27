const mergeSort = require('./mergeSort');

describe('Tests de mergeSort', () => {
  test("doit retourner un tableau vide lorsque le tableau d'entrée est vide", () => {
    expect(mergeSort([])).toEqual([]);
  });

  test("doit retourner le même tableau lorsqu'il contient un seul élément", () => {
    expect(mergeSort([1])).toEqual([1]);
  });

  test("doit trier correctement un tableau d'entiers", () => {
    expect(mergeSort([3, 2, 1])).toEqual([1, 2, 3]);
  });

  test('doit gérer les tableaux avec des doublons', () => {
    expect(mergeSort([4, 1, 2, 3, 2])).toEqual([1, 2, 2, 3, 4]);
  });

  test('doit trier correctement un tableau avec des nombres négatifs', () => {
    expect(mergeSort([-3, -1, -2])).toEqual([-3, -2, -1]);
  });

  test('doit trier correctement un tableau déjà trié', () => {
    expect(mergeSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  test('doit trier correctement un tableau avec des zéros', () => {
    expect(mergeSort([0, 5, 2, 0, 1])).toEqual([0, 0, 1, 2, 5]);
  });

  test('doit trier correctement un tableau avec des nombres positifs et négatifs', () => {
    expect(mergeSort([-2, 3, -1, 0, 2, 1])).toEqual([-2, -1, 0, 1, 2, 3]);
  });
});
