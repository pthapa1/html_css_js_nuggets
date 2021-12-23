document.querySelectorAll('.drop-zone__input').forEach((inputElement) => {
  const dropZoneElement = inputElement.closest('.drop-zone');
  // add click event on inputElement when clicked on dropzoneElement.

  dropZoneElement.addEventListener('click', (e) => {
    inputElement.click();
  });

  inputElement.addEventListener('change', (e) => {
    if (inputElement.files.length) {
      updateThumbnail(dropZoneElement, inputElement.files[0]);
    }
  });

  dropZoneElement.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropZoneElement.classList.add('drop-zone--over');
  });
  // This is not working for some reason
  // [('dragleave', 'dragend')].forEach((type) => {
  //   dropZoneElement.addEventListener(type, () => {
  //     dropZoneElement.classList.remove('drop-zone--over');
  //   });
  // });
  // Not working portion end.

  dropZoneElement.addEventListener('dragleave', () => {
    dropZoneElement.classList.remove('drop-zone--over');
  });
  dropZoneElement.addEventListener('dragend', () => {
    dropZoneElement.classList.remove('drop-zone--over');
  });

  dropZoneElement.addEventListener('drop', (e) => {
    e.preventDefault();
    // console.log(e.dataTransfer.files);
    if (e.dataTransfer.files) {
      inputElement.files = e.dataTransfer.files;
      updateThumbnail(dropZoneElement, e.dataTransfer.files[0]); // Only accept the fist picture. Therefore 0.
    }

    dropZoneElement.classList.remove('drop-zone--over');
  });
});
// thumbnainl
function updateThumbnail(dropZoneElement, file) {
  let thumbnailElement = dropZoneElement.querySelector('.drop-zone__thumb');

  // First, remove the prompt
  if (dropZoneElement.querySelector('.drop-zone__prompt')) {
    dropZoneElement.querySelector('.drop-zone__prompt').remove();
  }
  // Thumbnail element does not exist yet. So, lets create it.

  if (!thumbnailElement) {
    thumbnailElement = document.createElement('div');
    thumbnailElement.classList.add('drop-zone__thumb');
    dropZoneElement.appendChild(thumbnailElement);
  }

  thumbnailElement.dataset.label = file.name;

  if (file.type.startsWith('image/')) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      thumbnailElement.style.backgroundImage = `url(${reader.result})`;
    };
  } else {
    thumbnailElement.style.backgroundImage = null;
  }
}
