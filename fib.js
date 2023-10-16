function fibonacciIterative(n) {
  if (n <= 0) return 0;
  if (n === 1) return 1;

  let fibPrev = 0;
  let fibCurrent = 1;
  let fibNext;

  for (let i = 2; i <= n; i++) {
    fibNext = fibPrev + fibCurrent;
    fibPrev = fibCurrent;
    fibCurrent = fibNext;
  }

  return fibCurrent;
}

function fibonacciRecursive(n) {
  if (n <= 0) return 0;
  if (n === 1) return 1;
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

const memo = {};

function fMemo(n) {
  if (n in memo) return memo[n];
  if (n <= 2) return 1;
  memo[n] = fMemo(n - 1) + fMemo(n - 2);
  return memo[n];
}
