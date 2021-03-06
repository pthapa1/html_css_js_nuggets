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
  itemName.name = 'itemName';
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
  price.step = 'any';
  column3.appendChild(price);

  // column 4
  const column4 = document.createElement('td');
  tr.appendChild(column4);
  //data
  const total = document.createElement('input');
  total.type = 'number';
  total.name = 'total';
  total.step = 'any';
  total.className = 'total-amount';
  column4.appendChild(total);
});

// Now create calculate(elementID) the total by adding all the form.

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
// Need to append the table and its values in local storage when save changes is clicked.

let grabTheTable = document.getElementById('list');
// let grabAllTheRows = document.querySelectorAll('#list tr[id^="row_"]');

const listOfItemsTable = document.getElementById('listOfItems-table');

// submit the form.

listOfItemsTable.addEventListener('submit', (e) => {
  e.preventDefault();
  // before submitting lets grab all the rows.
  let grabAllTheRows = document.querySelectorAll('#list tr[id^="row_"]');
  let grabAllTheRowsArr = Array.from(grabAllTheRows);
  console.log(grabAllTheRowsArr);
  // grab all the values from the table
  let allItemName = document.querySelectorAll('[name=itemName]').value;
  let allQty = document.querySelectorAll('[name=qty]').value;
  let allPrice = document.querySelectorAll('[name=price]').value;

  let tableRowToAppend = document.getElementById('list').innerHTML;

  localStorage.setItem('entireTable', tableRowToAppend);

  // // save the values in local storage.
  // localStorage.setItem('tableRow', JSON.stringify(grabAllTheRowsArr));
  // // get the values from local storage.
  // let savedValueFromLocalStorage = JSON.parse(localStorage.getItem('tableRow'));
  // console.log(`Getting the saved value:  ${savedValueFromLocalStorage}`);

  // testing retriving values.
  // var itemsName = document.querySelector('#row_1 > td:nth-child(1)').value;
  // console.log(itemsName);
  // test end.

  // if you want to clone the table.
  // let myTable = document.getElementById('list');
  // let myClone = myTable.cloneNode(true);

  //let summaryTable = document.getElementById('summaryTable');

  // let newClonedTable = summaryTable.appendChild(myClone);

  // adding the summary of the values in the new table.
  // var AddRown = document.getElementById('summaryTable');
  // var NewRow = AddRown.insertRow(n);
});

window.addEventListener('DOMContentLoaded', () => {
  let getTheTable = localStorage.getItem('entireTable');
  let OriginalTableContent = document.getElementById('list').innerHTML;
  if (getTheTable != OriginalTableContent) {
    listTable.appendChild(getTheTable);
  }
});

// don't append if the table is empty. If the table is appended, don't append it again. Or don't click it twice.
// Replace the
//
