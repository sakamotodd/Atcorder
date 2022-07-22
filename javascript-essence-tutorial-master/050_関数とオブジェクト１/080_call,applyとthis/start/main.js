function a(name, Tim) {
  console.log("hello " + name + Tim);
}

const tim = { name: "Tim" };
const b = a.bind(tim);

b();
a.apply(tim, ["tim", "Bob"]);
a.call(tim, "Tim", "Bob");

const array = [1, 2, 3, 4, 5];
const result = Math.max(...array);
console.log(result);
