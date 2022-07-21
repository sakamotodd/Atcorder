const N = 10;
let arr = [];
for (let j = 2; j < N; j++) {
  if (f(j)) {
    arr.push(j);
  }
}
console.log(arr.join(" "));

function f(n) {
  if (n === 2) return true;
  for (let i = 2; i <= n - 1; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
