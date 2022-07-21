let N = 9;
let Y = 45000;

let result = "-1 -1 -1";
for (let i = 0; i <= N; i++) {
  for (let n = 0; n <= N; n++) {
    let k = N - (i + n);
    if (k < 0) continue;
    if (i * 10000 + n * 5000 + k * 1000 === Y) {
      result = `${i} ${n} ${k}`;
      break;
    }
  }
}

console.log(result);
