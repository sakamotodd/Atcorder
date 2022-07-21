let A = [20, 18, 4];

let count = 0;
A.sort((a, b) => b - a).map((m, i) => (i % 2 === 0 ? (count += m) : (count -= m)));
console.log(count);
