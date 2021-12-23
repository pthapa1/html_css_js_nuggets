function openPage(pageName, elmnt, color, backgroundColor) {
  let i, tabcontent, tablinks, tabButton, newSPF, newP;
  tabcontent = document.getElementsByClassName('tabcontent');
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = 'none';
  }

  tablinks = document.getElementsByClassName('tablink');
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = '';
  }
  document.getElementById(pageName).style.display = 'block';
  elmnt.style.backgroundColor = color;

  // Adding the BackgroundColor behind the buttons.
  tabButton = document.getElementById('tabs');
  tabButton.style.backgroundColor = backgroundColor;

  //Adding the backgroundColor behind the spf.
  newSPF = document.getElementById('new-spf');
  newSPF.style.backgroundColor = backgroundColor;

  //Adding the backgroundColor behind the new packages
  newP = document.getElementById('new-p');
  newP.style.backgroundColor = backgroundColor;
  // Adding it on new Test Section
  let testSection = (document.getElementById(
    'testSection'
  ).style.backgroundColor = backgroundColor);
}

// Get the element with id="defaultOpen" and click on it
document.getElementById('defaultOpen').click();
// The problem is, everytime I add a button I need to add a new ID, grab that from js and add the color behind it.

// Adding A dynamic button

function add(type, placeholder) {
  // create element dynamically

  let element = document.createElement('input');
  element.type = type;
  element.placeholder = placeholder;

  // let newField = document.getElementById('new-p');
  // newField.appendChild(element);

  let contentSection = document.querySelectorAll('.tabcontent');
  contentSection.forEach((section) => {
    section.appendChild(element);
  });
  // for (var i = 0; i < contentSection.length; i++) {
  //   let newField = contentSection[i];
  //   console.log(newField);
  // }
}
document.getElementById('addBtn').onclick = () =>
  add('text', 'interactive gold');
