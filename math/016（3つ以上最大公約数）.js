function main(arg) {
  let N = arg
    .split("\n")[1]
    .split(" ")
    .map((m) => BigInt(m));
  console.log(gcd.apply(null, N).toString());

  function gcd() {
    var ans = arguments[0];
    for (var i = 1; i < arguments.length; i++) {
      ans = f(ans, arguments[i]);
    }
    return ans;
  }

  function f(a, b) {
    return Boolean(b) ? f(b, a % b) : a;
  }
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
