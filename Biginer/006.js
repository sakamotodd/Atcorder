let N = 20;
let A = 2;
let B = 5;

let result = Array.from(new Array(N), (a, i) => i + 1).filter((f) => {
  let num = f
    .toString()
    .split("")
    .reduce((a, b) => parseInt(a, 10) + parseInt(b, 10));
  return A <= num && num <= B;
});
console.log(result.reduce((a, b) => a + b));
