const bigPicture = document.querySelector('.big-picture');
const closeButton = bigPicture.querySelector('.cancel');
const commentCount = bigPicture.querySelector('.social__comment-count');
const commentsLoader = bigPicture.querySelector('.comments-loader');

const onDocumentKeydown = (evt) => {
  if (evt.key === 'Escape') {
    closeBigPicture();
  }
};

const onCloseButtonClick = (evt) => {
  evt.preventDefault();
  closeBigPicture();
};

const openBigPicture = () => {
  bigPicture.classList.remove('hidden');
  document.querySelector('body').classList.add('modal-open');

  document.addEventListener('keydown', onDocumentKeydown);

  commentCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');
};

const closeBigPicture = () => {
  bigPicture.classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');

  document.removeEventListener('keydown', onDocumentKeydown);
};

closeButton.addEventListener('click', onCloseButtonClick);

export { openBigPicture };
