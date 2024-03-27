function fibsRec(n, memo = [0, 1]) {
  if (n <= 0) return [];
  if (n <= memo.length) return memo.slice(0, n);
  let res = fibsRec(n - 1, memo);
  res[n - 1] = res[n - 2] + res[n - 3];
  return res;
}

module.exports = fibsRec;
