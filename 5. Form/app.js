let addNewItemButton = document.getElementById('add-new-item');
let listTable = document.getElementById('list');

const uniqueId = () => {
  return Date.now().toString(36) + Math.random().toString(36).substring(2);
};

addNewItemButton.addEventListener('click', () => {
  // now lets create tr and append inside the table body.

  // const uniqueId = () => {
  //   return Date.now().toString(36) + Math.random().toString(36).substring(2);
  // };

  const tr = document.createElement('tr');
  let tableRowID = (tr.id = `row_${uniqueId()}`);
  tr.setAttribute('oninput', `calculate('${tableRowID}')`);
  listTable.appendChild(tr);

  // lets create a column 1 and append it inside the tr
  const column1 = document.createElement('td');
  tr.appendChild(column1);
  // data of column 1
  const itemName = document.createElement('input');
  itemName.type = 'text';
  column1.appendChild(itemName);

  // column 2
  const column2 = document.createElement('td');
  tr.appendChild(column2);
  //data of column 2
  const qty = document.createElement('input');
  qty.type = 'number';
  qty.className = 'qty';
  qty.name = 'qty';
  column2.appendChild(qty);

  // column 3
  const column3 = document.createElement('td');
  tr.appendChild(column3);
  //data of column 3
  const price = document.createElement('input');
  price.type = 'number';
  price.name = 'price';
  column3.appendChild(price);

  // column 4
  const column4 = document.createElement('td');
  tr.appendChild(column4);
  //data
  const total = document.createElement('input');
  total.type = 'number';
  total.name = 'total';
  total.className = 'total-amount';
  column4.appendChild(total);
});

// Now create calculate(elementID)

function calculate(elementID) {
  let qtyBox = document.querySelectorAll(
    `#${elementID} > td:nth-child(2) > input:nth-child(1)`
  )[0].value;
  let priceBox = document.querySelectorAll(
    `#${elementID} > td:nth-child(3) > input:nth-child(1)`
  )[0].value;
  let totalAmountBox = document.querySelectorAll(
    `#${elementID} > td:nth-child(4) > input:nth-child(1)`
  )[0];

  let myResult = qtyBox * priceBox;

  totalAmountBox.value = myResult = (Math.round(myResult * 100) / 100).toFixed(
    2
  ); // fixed to two decimal places
  // Calculate the sum of the total box
  let sumTotal = document.getElementById('sumTotal');
  let totalBoxes = document.querySelectorAll('[name=total]');
  let sumValue = 0;
  for (let i = 0; i < totalBoxes.length; ++i) {
    sumValue += parseFloat(totalBoxes[i].value);
  }
  sumTotal.textContent = sumValue = (Math.round(sumValue * 100) / 100).toFixed(
    2
  );
}
// when the user clicks Save Changes, old form disappears and the new one appears.
// clicking on Cancel returns the user to the home page.

// make the fields required.
// trash / delete
// save changes to summary page.
