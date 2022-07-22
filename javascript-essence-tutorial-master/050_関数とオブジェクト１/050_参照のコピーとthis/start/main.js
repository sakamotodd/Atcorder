const person = {
  name: "Tom",
  hello: function () {
    console.log("Hello " + this.name);
  },
};
const ref = person.hello();
ref();
