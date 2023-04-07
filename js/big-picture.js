import { renderPost, renderComments } from './post.js';

const bigPicture = document.querySelector('.big-picture');
const postShowingComments = bigPicture.querySelector('.social__comments').children;
const commentsLoader = bigPicture.querySelector('.comments-loader');
let currentPostComments;

const isAllCommentsShown = () => {
  const isShown = postShowingComments.length === currentPostComments.length;
  if (isShown) {
    commentsLoader.classList.add('hidden');
  } else {
    commentsLoader.classList.remove('hidden');
  }
};

const onCommentsLoaderClick = () => {
  renderComments(currentPostComments);
  isAllCommentsShown();
};

const openBigPicture = (post) => {
  currentPostComments = post.comments;
  renderPost(post);
  commentsLoader.addEventListener('click', onCommentsLoaderClick);
  isAllCommentsShown();
};

function closeBigPicture () {
  commentsLoader.removeEventListener('click', onCommentsLoaderClick);
  currentPostComments = null;
}

export { openBigPicture, closeBigPicture };
