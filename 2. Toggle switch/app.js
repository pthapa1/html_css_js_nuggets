let toggleSwitch = document.querySelector('#myToggle');
// let darkMode = document.querySelector('.darkMode');

toggleSwitch.addEventListener('change', () => {
  // darkMode.classList.toggle('darkBody');
  document.body.classList.toggle('dark-theme');
});

// how do you toggle
