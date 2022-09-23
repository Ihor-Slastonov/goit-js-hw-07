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

galleryRef.insertAdjacentHTML('beforeend', renderImages);

galleryRef.addEventListener('click', onClick);

function onClick(e) {
    e.preventDefault();
    if (e.target === e.currentTarget) {
        return;
    }
    const currentImage = e.target.dataset.source;

    const instance = basicLightbox.create(`
    <img src="${currentImage}" width="800" height="600">
`);
    instance.show();
    console.log(instance.show);
}
