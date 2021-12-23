// var counter = 0;

let addNew = () => {
  // select the main div/container where all other divs will be added
  var mainContainer = document.getElementById('maincontainer');

  // create a new div for holding text and button input elements

  var newDiv = document.createElement('div');
  newDiv.className = 'multipleDropdowns';

  //create a new text input

  var newDropDown = document.createElement('select');

  var newDropDownOption = document.createElement('option');
  newDropDownOption.value = 'value1';
  newDropDownOption.text = 'Option 1';

  newDropDown.add(newDropDownOption);

  // create buttons for removing inputs

  var newDelButton = document.createElement('input');
  newDelButton.className = 'removeIndividualDropdown';
  newDelButton.type = 'button';
  newDelButton.value = ' remove this ';

  newDiv.appendChild(newDropDown); // adding the newly created dropdown to new div
  // newDiv.appendChild(newAddButton);
  newDiv.appendChild(newDelButton);

  // finally append newDiv to the mainContainer div

  mainContainer.appendChild(newDiv);

  // removing individual dropdowns
  const dropdownlist = document.querySelectorAll('.removeIndividualDropdown');
  if (dropdownlist.length > 0) {
    dropdownlist.forEach((list) => {
      list.addEventListener('click', (evt) => {
        evt.target.parentNode.remove(this);
      });
    });
  }
};
let reset = () => {
  let elements = document.getElementsByClassName('multipleDropdowns');
  while (elements.length > 0) {
    elements[0].parentNode.removeChild(elements[0]);
  }
};
