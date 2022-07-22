/**
 * 分割代入
 */
let a = {
  type: "test1",
  foo: "arg1",
};

let { type, foo } = a;

console.log(type);
console.log(foo);

let b = [1, 2, 3];

let [num1, num2, num3] = b;
console.log(num1);
console.log(num2);
console.log(num3);
