import { isKeyEscape } from './utilities.js';
const body = document.body;
let popup = null;

const onDocumentKeydown = (evt) => {
  if (isKeyEscape(evt)) {
    closePopup();
  }
};

const onCloseButtonClick = (evt) => {
  evt.preventDefault();
  closePopup();
};

const openPopup = (element) => {
  popup = element;
  popup.classList.remove('hidden');
  body.classList.add('modal-open');

  document.addEventListener('keydown', onDocumentKeydown);
};

function closePopup() {
  popup.classList.add('hidden');
  body.classList.remove('modal-open');

  document.removeEventListener('keydown', onDocumentKeydown);
  popup = null;
}

export { openPopup, onCloseButtonClick };
