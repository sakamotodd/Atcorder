let S = "101";

let result = 0;
const a = S.split("").forEach((f) => (result += parseInt(f, 10)));
console.log(result);
