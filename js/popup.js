import { isKeyEscape } from './utilities.js';
const body = document.body;

const onDocumentKeydown = (evt, popup) => {
  if (isKeyEscape(evt)) {
    closePopup(popup);
  }
};

const onCloseButtonClick = (evt, popup) => {
  evt.preventDefault();
  closePopup(popup);
};

const openPopup = (popup) => {
  popup.classList.remove('hidden');
  body.classList.add('modal-open');

  document.addEventListener('keydown', onDocumentKeydown);
};

function closePopup(popup) {
  popup.classList.add('hidden');
  body.classList.remove('modal-open');

  document.removeEventListener('keydown', onDocumentKeydown);
}

export { openPopup, onCloseButtonClick };
