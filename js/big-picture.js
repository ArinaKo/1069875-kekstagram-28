import { renderPost } from './post.js';
import { isKeyEscape } from './utilities.js';

const body = document.body;
const bigPicture = document.querySelector('.big-picture');
const closeButton = bigPicture.querySelector('.cancel');

const commentCount = bigPicture.querySelector('.social__comment-count');
const commentsLoader = bigPicture.querySelector('.comments-loader');

const onDocumentKeydown = (evt) => {
  if (isKeyEscape(evt)) {
    closeBigPicture();
  }
};

const onCloseButtonClick = (evt) => {
  evt.preventDefault();
  closeBigPicture();
};

const openBigPicture = (post) => {
  renderPost(post);
  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');

  document.addEventListener('keydown', onDocumentKeydown);

  commentCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');
};

function closeBigPicture () {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');

  document.removeEventListener('keydown', onDocumentKeydown);
}

closeButton.addEventListener('click', onCloseButtonClick);

export { openBigPicture };
