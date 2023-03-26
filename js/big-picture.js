import { onCloseButtonClick } from './popup.js';
import { renderPost, renderComments } from './post.js';

const bigPicture = document.querySelector('.big-picture');
const closeButton = bigPicture.querySelector('.cancel');

const postShowingComments = bigPicture.querySelector('.social__comments').children;
const commentsLoader = bigPicture.querySelector('.comments-loader');
let currentPostComments;

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
  commentsLoader.addEventListener('click', onCommentsLoaderClick);
  allCommentsShown();
};

function closeBigPicture () {
  commentsLoader.removeEventListener('click', onCommentsLoaderClick);
  currentPostComments = null;
}

closeButton.addEventListener('click', onCloseButtonClick);

export { openBigPicture, closeBigPicture };
