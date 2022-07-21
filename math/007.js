
const N = 15;
const X = 3;
const Y = 5;

const result = Array.from(new Array(N), (n, i) => i + 1).filter((f) => {
  if (f < X && f < Y) return;
  return f % X === 0 || f % Y === 0;
});

console.log(result.length);


// 参考
"use strict";
function Main(input) {
  const [N, X, Y] = input
    .trim()
    .split(" ")
    .map((v) => parseInt(v));
  let multipleCount = 0;

  for (let i = 1; i <= N; i++) {
    if (i % X === 0 || i % Y === 0) {
      multipleCount++;
    }
  }
  console.log(multipleCount);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
/**
問題文
N 以下の正の整数の中で、X の倍数または Y の倍数であるものの個数はいくつありますか？

制約
1≤N≤10
6

1≤X<Y≤10
6

入力はすべて整数

入力
入力は以下の形式で標準入力から与えられます。

N X Y
出力
答えを出力してください。

入力例 1

15 3 5
出力例 1

7
15 以下の正の整数の中で 3 または 5 の倍数であるものは 3,5,6,9,10,12,15 の 7 個であるため、7 と出力すれば正解です。

入力例 2

1000000 11 13
出力例 2

160839
 */
