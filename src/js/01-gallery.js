// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css";

import { galleryItems } from './gallery-items.js';
const container = document.querySelector('.gallery')

function createMarkup(arr) {
    return arr.map(({ preview, original, description }) => `
    <li data-id ='' class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img class="gallery__image" src="${preview}"  alt="${description}"/>
    </a>
    </li>`
    ).join('');   
}
createMarkup(galleryItems);
container.insertAdjacentHTML('beforeend', createMarkup(galleryItems));
console.log(SimpleLightbox);

    const lightbox = new SimpleLightbox('.gallery__item a', {
    captionsData: 'alt',
    captionDelay: 250,
});
