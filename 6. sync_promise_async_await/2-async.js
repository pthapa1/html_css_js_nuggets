// asynchronous

console.log('I ');

setTimeout(() => {
  console.log('spoon');
}, 0);

console.log('eat ');

console.log('ice cream ');

console.log('with a ');

// although spoon is in the middle, since setTimeout function is async js function, it will only run after everthing is done. So the result looks like
// I eat ice cream with a spoon.
