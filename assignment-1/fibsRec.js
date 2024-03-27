function fibsRec(n, memo = [0, 1]) {
  if (n <= 0) return [];
  if (n <= memo.length) return memo.slice(0, n);
  let array = fibsRec(n - 1, memo);
  array[n - 1] = array[n - 2] + array[n - 3];
  return array;
}

module.exports = fibsRec;
