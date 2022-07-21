/**
 * 動的計画法
 * https://tech-blog.s-yoshiki.com/entry/261
 *
 * // [問題]
// 問: [3, 7, 8, 12, 13, 18] の部分和が 27 になる部分集合を求めよ。
// 答: 存在する。[7, 8, 12]
 */

const data = [3, 7, 8, 12, 13, 18];
console.log(solve(data, 27));

function solve(data, sum) {
  const db = Array.from(new Array(data.length + 1), () =>
    new Array(sum + 1).fill(0)
  );
  for (let col = 0; col < data.length; col++) {
    for (let row = 0; row < sum + 1; row++) {
      if (row < data[col]) {
        db[col + 1][row] = db[col][row];
      } else {
        db[col + 1][row] = Math.max(
          db[col][row],
          db[col][row - data[col]] + data[col]
        );
      }
    }
  }
  return db[data.length][sum] === sum ? "Yes" : "No";
}
