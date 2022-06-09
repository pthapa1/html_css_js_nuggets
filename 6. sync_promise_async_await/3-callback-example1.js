function one(apple) {
  console.log(' step 1 complete. Calling ...');
  apple();
}

// this is the argument function passed in function one
function two() {
  console.log(' step 2 ');
}

one(two);

// Even inside the function, the placement of code matters. JS executes the code from top to bottom.
