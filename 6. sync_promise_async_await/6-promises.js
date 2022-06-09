// promises taken instructions. They don't form relationship with other function by putting another function initself.
let stocks = {
  Fruits: ['straberry', 'grapes', 'banana', 'apple'],
  liquid: ['water', 'ice'],
  holder: ['cone', 'cup', 'stick'],
  toppings: ['chocolate', 'peanuts'],
};

let is_shop_open = true;

let order = (time, work) => {
  return new Promise((resolve, reject) => {
    if (is_shop_open) {
      setTimeout(() => {
        resolve(work());
      }, time);
    } else {
      reject(console.log('Our shop is closed'));
    }
  });
};

order(2000, () => console.log(`${stocks.Fruits[0]} was selected`))
  .then(() => {
    return order(0, () => {
      console.log('Production has started');
    });
  })

  .then(() => {
    return order(2000, () => {
      console.log('The fruit was chopped');
    });
  })

  .then(() => {
    return order(2000, () => {
      console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);
    });
  })

  .then(() => {
    return order(1000, () => {
      console.log(`${stocks.holder[1]} was selected`);
    });
  })

  .then(() => {
    return order(3000, () => {
      console.log(`${stocks.toppings[1]} was selected`);
    });
  })

  .then(() => {
    return order(2000, () => {
      console.log('Serve the Ice Cream');
    });
  })

  .catch(() => {
    console.log('Customer left');
  })

  .finally(() => {
    console.log('Day ended! Our shop is closed for today');
  });

// first you create/define promise.  What happens if resolved. What happens if rejected.
// then you call your function. Pass in value for parameter if any.  Add any additional instructions with .then until instructions end.
// .catch comes at the very end. If the promise was rejected, .catch runs.
// .finally runs in either case. It does not matter if the promise was resolved or rejected
