import { filterPosts } from './filters.js';
import { generateThumbnails } from './thumbnails.js';
import { openBigPicture, closeBigPicture } from './big-picture.js';
import { openPopup } from './popup.js';

const picturesList = document.querySelector('.pictures');
const bigPicture = document.querySelector('.big-picture');
const closeButton = bigPicture.querySelector('.cancel');

let postsData = [];
let postsId = [];

const clearGallery = () => {
  picturesList.querySelectorAll('[data-thumbnail-id]').forEach((picture) => {
    picture.remove();
  });
};

const onThumbnailClick = (thumbnailIndex) => {
  const post = postsData[postsId.indexOf(thumbnailIndex)];
  openPopup(bigPicture, closeButton, openBigPicture(post), closeBigPicture);
};

const onPicturesListClick = (evt) => {
  if (!evt.target.closest('.picture')) {
    return;
  }
  evt.preventDefault();
  const thumbnailIndex = Number(evt.target.parentNode.dataset.thumbnailId);
  onThumbnailClick(thumbnailIndex);
};

const renderGallery = () => {
  const filteredPosts = filterPosts(postsData);
  clearGallery();
  generateThumbnails(filteredPosts);
};

const setGallery = (posts) => {
  postsData = posts;
  postsId = posts.map((post) => post.id);
  renderGallery();
  picturesList.addEventListener('click', onPicturesListClick);
};

export { setGallery, renderGallery };
