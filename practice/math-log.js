function solve(data, num) {
  const dp = Array.from(new Array(data.length + 1), () =>
    new Array(num + 1).fill(0)
  );
  console.log(dp);
  for (let col = 0; col < data.length; col++) {
    // data.length = 6
    for (let row = 0; row < num + 1; row++) {
      console.log(`row: ${row} < data[col]: ${data[col]}`);
      if (row < data[col]) {
        console.log(`${dp[col + 1][row]} = ${dp[col][row]}`);
        dp[col + 1][row] = dp[col][row];
      } else {
        console.log(`${dp[col][row]}, ${dp[col][row - data[col]] + data[col]}`);
        dp[col + 1][row] = Math.max(
          dp[col][row],
          dp[col][row - data[col]] + data[col]
        );
        console.log(dp[col + 1][row]);
      }
    }
  }
  return dp[data.length][num] === num;
}

function test(arr, target) {
  // 二重配列作成
  const box = Array.from(new Array(arr.length + 1), () =>
    new Array(target + 1).fill(0)
  );

  for (let columns = 0; columns < arr.length1; columns++) {
    for (let row = 0; row < target + 1; row++) {
      if (row < arr[columns]) {
        box[columns + 1][row] = box[columns][row];
      } else {
        box[columns + 1][row] = Math.max(
          box[columns][row],
          box[columns][row - arr[columns]] + arr[columns]
        );
      }
    }
  }
  return (box[arr.length][target] = target);
}
const arr = [1, 2, 3];
console.log(test(arr, 3) ? "存在する" : "存在しない");
