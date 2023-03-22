import { renderPost } from './post.js';
import { openPopup, onCloseButtonClick } from './popup.js';

const bigPicture = document.querySelector('.big-picture');
const closeButton = bigPicture.querySelector('.cancel');

const commentCount = bigPicture.querySelector('.social__comment-count');
const commentsLoader = bigPicture.querySelector('.comments-loader');

const openBigPicture = (post) => {
  renderPost(post);
  openPopup(bigPicture);

  commentCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');
};

closeButton.addEventListener('click', (evt) => onCloseButtonClick(evt, bigPicture));

export { openBigPicture };
