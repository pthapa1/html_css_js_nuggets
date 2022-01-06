let addNewItemButton = document.getElementById('add-new-item');
let listTable = document.getElementById('list');

addNewItemButton.addEventListener('click', () => {
  // now lets create tr and append inside the table body.
  let counter = 2;
  let newRowAddedNumber = () => (counter += 1);

  const tr = document.createElement('tr');
  let tableRowID = (tr.id = `row_${newRowAddedNumber()}`);
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
  const total = document.createElement('div');
  total.className = 'total-amount';
  column4.appendChild(total);
});

// Now create calculate(elementID)

function calculate(elementID) {
  // let tableRow = document.getElementById(elementID);
  let qtyBox = document.querySelectorAll(
    `#${elementID} > td:nth-child(2) > input:nth-child(1)`
  )[0].value;
  let priceBox = document.querySelectorAll(
    `#${elementID} > td:nth-child(3) > input:nth-child(1)`
  )[0].value;
  let totalAmountBox = document.querySelectorAll(
    `#${elementID} > td:nth-child(4) > div:nth-child(1)`
  );

  let myResult = qtyBox * priceBox;
  console.log(myResult);

  totalAmountBox.value = myResult;
}
//#row_2 > td:nth-child(2) > input:nth-child(1)
//#row_2 > td:nth-child(3) > input:nth-child(1)
