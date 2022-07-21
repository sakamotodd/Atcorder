console.log(getPrimeFactors(10));

const getPrimeFactors = (n) => {
  if (n < 2) return []; // ２未満素数でない
  if (n === 2 || n === 3 || n === 5) return [n]; // 2,3,5は素数
  if (n % 2 === 0) return [2, ...getPrimeFactors(n / 2)]; // 2,3,5の倍数は合成数
  if (n % 3 === 0) return [3, ...getPrimeFactors(n / 3)];
  if (n % 5 === 0) return [5, ...getPrimeFactors(n / 5)];

  // ためし割り: 擬似素数(2でも3でも5でも割り切れない数字)で次々に割っていく
  let prime = 7;
  let step = 4;
  const limit = Math.sqrt(n);
  while (prime <= limit) {
    if (n % prime === 0) return [prime, ...getPrimeFactors(n / prime)];
    prime += step;
    step = 6 - step;
  }
  return [n];
};
