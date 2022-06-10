let stocks = {
  Fruits: ['straberry', 'grapes', 'banana', 'apple'],
  liquid: ['water', 'ice'],
  holder: ['cone', 'cup', 'stick'],
  toppings: ['chocolate', 'peanuts'],
};

let is_shop_open = true;

function time(ms) {
  return new Promise((resolve, reject) => {
    if (is_shop_open) {
      setTimeout(resolve, ms);
    } else {
      reject(console.log('Shop is Closed! Please by when we are open.'));
    }
  });
}

async function kitchen() {
  try {
    await time(2000);
    console.log(`${stocks.Fruits[0]} was picked`);

    await time(000);
    console.log('Start the production');

    await time(2000);
    console.log('Cut the fruit');

    await time(1000);
    console.log(`${stocks.liquid[1]} and ${stocks.liquid[2]} was added`);

    await time(1000);
    console.log(`Start the Machine`);

    await time(2000);
    console.log(`${stocks.holder[0]} is selected`);

    await time(3000);
    console.log(`${stocks.toppings[1]} is added`);

    await time(2000);
    console.log('Serve the Ice Cream');
  } catch (error) {
    console.log('Customer Left', error);
  } finally {
    console.log('Day Ended! Please come back tomorrow.');
  }
}

kitchen();
