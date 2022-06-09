let stocks = {
  Fruits: ['straberry', 'grapes', 'banana', 'apple'],
  liquid: ['water', 'ice'],
  holder: ['cone', 'cup', 'stick'],
  toppings: ['chocolate', 'peanuts'],
};

let is_shop_open = true;

// format of async await goes like this
// async function order() {
//   try {
//     await abc; // where abc is a function.
//   } catch (error) {
//     console.log('abs function does not exists', error);
//   } finally {
//     console.log('runs code anyways');
//   }
// }

// order().then(() => {
//   console.log('you can also chain .then with async/await');
// });

let toppings_choice = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(console.log(`which toppings would you like?`));
    }, 3000);
  });
};

async function kitchen() {
  console.log('A');
  console.log('B');
  console.log('C');

  await toppings_choice(); // once applied. Await keyword waits for the function to be resolved before moving on. The function is
  console.log('D');
  console.log('E');
}

kitchen();

console.log('Doing the dishes');
console.log('Cleaning the table');
console.log('taking other customer orders');
