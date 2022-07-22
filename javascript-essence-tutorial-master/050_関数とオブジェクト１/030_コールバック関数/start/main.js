/**
 * コールバック関数
 */

function hello(name) {
  console.log("first" + name);
}

function fn(cb) {
  cb("Tom");
}

fn(hello);

fn(function (name) {
  console.log("hello" + name);
});

setTimeout(hello, 2000);
