function hello(names) {
  names = names || 'Tom';
  console.log('Hello ' + names);
}

hello()

let names;

names && hello(names);
