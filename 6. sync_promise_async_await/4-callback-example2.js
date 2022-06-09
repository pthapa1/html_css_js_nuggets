// For synchronous and async function. Order matters. Therefore, for this example, order from customer => fetch ingredients => start production => serve
// following previous example. We are passing function inside another function. Callback.

let order = (call_production) => {
  console.log(`order placed. Production notified`);
  call_production();
};

// callback function passed inside order.
let production = () => {
  console.log(`Order received. Starting production`);
};

// executing order.
order(production);
