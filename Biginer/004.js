let count = 0;
let array = [382253568, 723152896, 37802240, 379425024, 404894720, 471526144];
while (array.every((a) => a % 2 === 0)) {
  array = Array.from(array, (x) => x / 2);
  count++;
}
console.log(count);
