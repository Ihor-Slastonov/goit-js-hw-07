import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryRef = document.querySelector('.gallery');

const renderImages = galleryItems
  .map(
    item => `<div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>`,
  )
  .join('');

galleryRef.innerHTML = "";
galleryRef.insertAdjacentHTML('beforeend', renderImages);

galleryRef.addEventListener('click', onImgClick);

function onImgClick(e) {
  e.preventDefault();
  if (e.target === e.currentTarget) {
    return;
  }
  const instance = basicLightbox.create(`
    <img src="${e.target.dataset.source}" alt="${e.target.description}" width="800" height="600">
`, {
    onClose: () => {
      document.removeEventListener('keydown', onModalKeyEscClose)
    }
  });
  
  instance.show();

  document.addEventListener('keydown', onModalKeyEscClose);

  function onModalKeyEscClose(e) {
    if (e.code === 'Escape') {
      instance.close();
      document.removeEventListener('keydown', onModalKeyEscClose)
    }
    console.log(e.key);
  }
}
