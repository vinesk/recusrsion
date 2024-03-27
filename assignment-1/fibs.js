function fibs(n) {
  if (n <= 0) return [];
  if (n === 1) return [0];
  let res = [0, 1];
  for (let i = 2; i < n; i++) {
    res[i] = res[i - 1] + res[i - 2];
  }
  return res;
}

module.exports = fibs;
