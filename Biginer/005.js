let A = 30; // 500円
let B = 40; // 100円
let C = 50;
let result = 6000;
let count = 0;
for (let i = 0; i <= A; i++) {
  for (let n = 0; n <= B; n++) {
    for (let j = 0; j <= C; j++) {
      if (i * 500 + n * 100 + j * 50 === result) {
        count++;
      }
    }
  }
}

console.log(count);
