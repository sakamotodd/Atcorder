let N = 36;
console.log(getPrimeFactors(N).join(" "));

function getPrimeFactors(n) {
  if (n < 2) return [];
  if (n === 2 || n === 3 || n === 5) return [n];
  if (n % 2 === 0) return [2, ...getPrimeFactors(n / 2)];
  if (n % 3 === 0) return [3, ...getPrimeFactors(n / 3)];
  if (n % 5 === 0) return [5, ...getPrimeFactors(n / 5)];
  let prime = 7;
  let step = 4;
  const limit = Math.sqrt(n);
  while (prime <= limit) {
    if (n % prime === 0) return [prime, ...getPrimeFactors(n / prime)];
    prime += step;
    step = 6 - step;
  }
  // return [n];
}
