const completeAddress = (/*placeName*/) => {
  const placeName = document.getElementById('myInput').value;
  fetch(`http://localhost:3000/address/${placeName}`)
    .then((res) => {
      if (!res.ok) {
        throw new Error(`HTTP error ${res.status}`);
      }
      return res.json();
    })
    .then((data) => {
      const elementFromTemplate = (html) => {
        const template = document.createElement('template');
        template.innerHTML = html.trim();
        return template.content.firstElementChild;
      };
      data.forEach((address) => {
        const myElementList = elementFromTemplate(`
        <div class="singleDetail">
        <p class="name">${address.name}</p>
        <p class="address">${address.address}</p>
        <p class="phone">${address.phone}</p>
    </div>`);
        const addressContainer = document.getElementById('address-container');
        addressContainer.appendChild(myElementList);
      });
    })
    .catch((error) => console.error('Error:', error));
};

// on click, get the address.
document
  .querySelector('#search-btn')
  .addEventListener('click', completeAddress);
