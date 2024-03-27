function mergeSort(array) {
  if (array.length < 2) {
    return array;
  }

  const halfIndex = Math.floor(array.length / 2);
  const half = array[halfIndex];

  const firstHalf = [];
  const lastHalf = [];

  for (let i = 0; i < array.length; i++) {
    if (i !== halfIndex) {
      array[i] < half ? firstHalf.push(array[i]) : lastHalf.push(array[i]);
    }
  }

  return [...mergeSort(firstHalf), half, ...mergeSort(lastHalf)];
}

module.exports = mergeSort;
