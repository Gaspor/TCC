/* Big O:  O(n) */
/* Complexidade Ciclomativa:  1 */
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

/* Big O:  O(2^n) */
/* Complexidade Ciclomativa:  3 */
function fibonacciRecursive(n) {
  if (n <= 0) return 0;
  if (n === 1) return 1;
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

/* Big O:  O(n) */
/* Complexidade Ciclomativa:  3 */
const memo = {};

function fMemo(n) {
  if (n in memo) return memo[n];
  if (n <= 2) return 1;
  memo[n] = fMemo(n - 1) + fMemo(n - 2);
  return memo[n];
}

function measureExecutionTime(func, ...args) {
  const start = performance.now();
  const result = func(...args);
  const end = performance.now();
  const executionTime = end - start;
  return {result, executionTime};
}

const value = 50;
var { result, executionTime } = measureExecutionTime(fibonacciIterative, value);
console.log(`Tempo de execução para fibonacciIterative: ${executionTime} millisegundos \nResultado: ${result}`);

var { result, executionTime } = measureExecutionTime(fMemo, value);
console.log(`Tempo de execução para fMemo: ${executionTime} millisegundos \nResultado: ${result}`);

var { result, executionTime } = measureExecutionTime(fibonacciRecursive, value);
console.log(`Tempo de execução para fibonacciRecursive: ${executionTime} millisegundos \nResultado: ${result}`);
