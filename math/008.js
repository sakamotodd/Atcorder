/**
 * 問題文
赤・青のカードが各 1 枚ずつあり、あなたはそれぞれのカードに 1 以上 N 以下の整数を 1 つ書き込みます。

カードに書かれた整数の合計が S 以下となる書き方は、いくつありますか？

制約
1≤N≤1000
1≤S≤2000
入力はすべて整数
入力
入力は以下の形式で標準入力から与えられます。

N S
出力
答えを出力してください。

入力例 1

3 4
出力例 1

6
合計が 4 以下となる書き込み方は、以下の 6 通りです。

赤のカードに 1 を書き込み、青のカードに 1 を書き込む
赤のカードに 1 を書き込み、青のカードに 2 を書き込む
赤のカードに 1 を書き込み、青のカードに 3 を書き込む
赤のカードに 2 を書き込み、青のカードに 1 を書き込む
赤のカードに 2 を書き込み、青のカードに 2 を書き込む
赤のカードに 3 を書き込み、青のカードに 1 を書き込む
 */

const [N, S] = [3, 4];
let count = 0;
for (let i = 1; i <= N; i++) {
  for (let n = 1; n <= N; n++) {
    if (n + i <= S) {
      count++;
    }
  }
}
console.log(count);
