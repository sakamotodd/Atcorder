function fib(n) {
  const result = [0, 1]; //初期状態

  // f(n) = f(n - 1) + f(n - 2)
  for (i = 2; i <= n; i++) {
    const a = result[i - 1];
    const b = result[i - 2];
    console.log(`${a} + ${b} = ${a + b}`);
    result.push(a + b);
  }
  return result[n];
}

console.log(fib(180));
