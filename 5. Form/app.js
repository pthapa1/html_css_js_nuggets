let addNewItemButton = document.getElementById('add-new-item');
let listTable = document.getElementById('list');

addNewItemButton.addEventListener('click', () => {
  let tbody = document.createElement('tbody');
  listTable.appendChild(tbody);
  // now lets create tr // NOT WORKING BELOW THIS LINE
  let tr = document.createElement('tr');
  // create table data

  let column1 = document.createElement('td');
  let itemName = document.createElement('input').type('text');
  // append td in tr
  tr.appendChild(itemName);
  // append tr inside tbody
  tbody.appendChild(tr);

  let firstColumn = column1.appendChild(itemName);
  tbody.appendChild(firstColumn);
});
