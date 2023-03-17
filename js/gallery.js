import { generateGallery } from './thumbnails.js';

const picturesList = document.querySelector('.pictures');

generateGallery();

const onThumbnailClick = function () {
  // open big picture
};

picturesList.addEventListener('click', (evt) => {
  if (evt.target.closest('.picture')) {
    evt.preventDefault();
    onThumbnailClick();
  }
});
