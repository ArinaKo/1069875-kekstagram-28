import { filterPosts } from './filters.js';
import { generateThumbnails } from './thumbnails.js';
import { openBigPicture, closeBigPicture } from './big-picture.js';
import { openPopup } from './popup.js';

const picturesList = document.querySelector('.pictures');
const bigPicture = document.querySelector('.big-picture');
const closeButton = bigPicture.querySelector('.cancel');

const clearGallery = () => {
  picturesList.querySelectorAll('[data-thumbnail-id]').forEach((picture) => {
    picture.remove();
  });
};

const generateGallery = (postsData) => {
  const filteredPosts = filterPosts(postsData);
  clearGallery();
  generateThumbnails(filteredPosts);
  const postsId = postsData.map((post) => post.id);

  const onThumbnailClick = (thumbnailIndex) => {
    const post = postsData[postsId.indexOf(thumbnailIndex)];
    openPopup(bigPicture, closeButton, openBigPicture(post), closeBigPicture);
  };

  picturesList.addEventListener('click', (evt) => {
    if (!evt.target.closest('.picture')) {
      return;
    }
    evt.preventDefault();
    const thumbnailIndex = Number(evt.target.parentNode.dataset.thumbnailId);
    onThumbnailClick(thumbnailIndex);
  });
};

export { generateGallery };
