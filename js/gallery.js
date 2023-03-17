import { generateGallery } from './thumbnails.js';
import { openBigPicture } from './big-picture.js';

const picturesList = document.querySelector('.pictures');

generateGallery();

const onThumbnailClick = function () {
  openBigPicture();
};

picturesList.addEventListener('click', (evt) => {
  if (evt.target.closest('.picture')) {
    evt.preventDefault();
    onThumbnailClick();
  }
});
