const completeAddress = (/*placeName*/) => {
  const elementFromTemplate = (html) => {
    const template = document.createElement('template');
    template.innerHTML = html.trim();
    return template.content.firstElementChild;
  };
  const addressContainer = document.getElementById('address-container');

  const placeName = document.getElementById('myInput').value;
  fetch(`http://localhost:3000/address/${placeName}`)
    .then((res) => {
      if (!res.ok) {
        throw new Error(`HTTP error ${res.status}`);
      }
      return res.json();
    })
    .then((data) => {
      data.forEach((address) => {
        const myElementList = elementFromTemplate(`
        <div class="singleDetail">
        <p class="name">${address.name}</p>
        <p class="address">${address.address}</p>
        <p class="phone">${address.phone}</p>
    </div>`);
        addressContainer.appendChild(myElementList);
      });
    })
    .catch((error) => {
      const myElementlist = elementFromTemplate(`
        <div class="singleDetail">
        <p class="message">${error}: Please Input a Valid Name. Special Characters and Empty Spaces Are Not Allowed in the Search Box.  </p>
        </div>
      `);
      addressContainer.appendChild(myElementlist);
    });
};

// on click, get the address.
document
  .querySelector('#search-btn')
  .addEventListener('click', completeAddress);

// TODO: on pressing enter, get the address.
// TODO: Add loading spinner while the
// TODO: when the value in the search box is null or undefined, return the error.
// TODO: Clear the search result and search box with clear result property.
