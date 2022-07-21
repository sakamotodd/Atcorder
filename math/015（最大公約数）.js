function main(arg) {
  let N = arg
    .split("\n")[0]
    .split(" ")
    .map((m) => parseInt(m, 10));
  console.log(gcd(N[0], N[1]));
}

const gcd = (x, y) => {
  return x % y ? gcd(y, x % y) : y;
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
