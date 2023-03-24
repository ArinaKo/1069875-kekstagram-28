import { renderPost, renderComments } from './post.js';
import { isKeyEscape } from './utilities.js';

const body = document.body;
const bigPicture = document.querySelector('.big-picture');
const closeButton = bigPicture.querySelector('.cancel');

const postShowingComments = bigPicture.querySelector('.social__comments').children;
const commentsLoader = bigPicture.querySelector('.comments-loader');
let currentPostComments;

const onDocumentKeydown = (evt) => {
  if (isKeyEscape(evt)) {
    closeBigPicture();
  }
};

const onCloseButtonClick = (evt) => {
  evt.preventDefault();
  closeBigPicture();
};

const allCommentsShown = () => {
  const isShown = postShowingComments.length === currentPostComments.length;
  if (isShown) {
    commentsLoader.classList.add('hidden');
  } else {
    commentsLoader.classList.remove('hidden');
  }
};

const onCommentsLoaderClick = () => {
  renderComments(currentPostComments);
  allCommentsShown();
};

const openBigPicture = (post) => {
  currentPostComments = post.comments;
  renderPost(post);
  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');

  document.addEventListener('keydown', onDocumentKeydown);
  commentsLoader.addEventListener('click', onCommentsLoaderClick);
  allCommentsShown();
};

function closeBigPicture () {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');

  document.removeEventListener('keydown', onDocumentKeydown);
  commentsLoader.removeEventListener('click', onCommentsLoaderClick);
  currentPostComments = null;
}

closeButton.addEventListener('click', onCloseButtonClick);

export { openBigPicture };
