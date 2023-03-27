import { isKeyEscape } from './utilities.js';
const body = document.body;
let popup = null;
let closeScript = null;

const onDocumentKeydown = (evt) => {
  if (isKeyEscape(evt)) {
    closePopup();
  }
};

const onCloseButtonClick = (evt) => {
  evt.preventDefault();
  closePopup();
};

const openPopup = (element, openFunction, closeFunction) => {
  popup = element;
  if (openFunction) {
    openFunction();
  }
  if (closeFunction) {
    closeScript = closeFunction;
  }
  popup.classList.remove('hidden');
  body.classList.add('modal-open');

  document.addEventListener('keydown', onDocumentKeydown);
};

function closePopup() {
  if (closeScript) {
    closeScript();
  }
  popup.classList.add('hidden');
  body.classList.remove('modal-open');

  document.removeEventListener('keydown', onDocumentKeydown);
  popup = null;
  closeScript = null;
}

export { openPopup, onCloseButtonClick };
