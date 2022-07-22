const person = {
  names: "Tom",
  hello: function () {
    console.log("Hello " + this.names);
  },
};

person.hello();
