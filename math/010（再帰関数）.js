/**
 * 階乗(再起関数)
 * 5 => 120
 * 1 * 2 * 3 * 4 * 5
 */

// 基本的な考え方
const N = 5;
let count = 1;
for (let i = 1; i <= N; i++) {
  count *= i;
}

// console.log(count);
console.log(f(N));
console.log(fib(N));

// 階乗
function f(k) {
  return k === 0 ? 1 : k * f(k - 1);
}

// フィボナッチ数列
function fib(k) {
  return k < 2 ? 1 : fib(k - 1) + fib(k - 2);
}
