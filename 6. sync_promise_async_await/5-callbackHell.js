let stocks = {
  Fruits: ['straberry', 'grapes', 'banana', 'apple'],
  liquid: ['water', 'ice'],
  holder: ['cone', 'cup', 'stick'],
  toppings: ['chocolate', 'peanuts'],
};

let order = (Fruit_name, call_production) => {
  setTimeout(() => {
    console.log(`${stocks.Fruits[Fruit_name]} was selected.`);
    call_production(); // this function is only executed when console.log on line 10 (above) gets done.
  }, 2000);
};

// callback function passed inside order.
let production = () => {
  setTimeout(() => {
    console.log('Production has started');
    setTimeout(() => {
      console.log('food has been chopped');

      setTimeout(() => {
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);

        setTimeout(() => {
          console.log('The machine was started');

          setTimeout(() => {
            console.log(`${stocks.holder[0]} was selected`);

            setTimeout(() => {
              console.log(`${stocks.toppings[0]} was selected`);

              setTimeout(() => {
                console.log('Ice Cream Served');
              }, 2000);
            }, 3000);
          }, 2000);
        }, 1000);
      }, 1000);
    }, 2000);
  }, 0);
};

// executing order.
order(0, production);

// It is also called callback hell.
// callback forms relationship with other function by associating another function inside its self and another function inside the last one.
// This creates a christmas tree like structure.
