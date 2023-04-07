import { isKeyEscape } from './utilities.js';

const body = document.body;

let popup = null;
let closeButton = null;
let closeScript = null;

const onDocumentKeydown = (evt) => {
  const userMessage = body.querySelector('[data-user-message]');
  if (isKeyEscape(evt) && !userMessage) {
    closePopup();
  }
};

const onCloseButtonClick = (evt) => {
  evt.preventDefault();
  closePopup();
};

const openPopup = (element, button, openFunction, closeFunction) => {
  popup = element;
  closeButton = button;
  if (openFunction) {
    openFunction();
  }
  if (closeFunction) {
    closeScript = closeFunction;
  }
  popup.classList.remove('hidden');
  body.classList.add('modal-open');

  closeButton.addEventListener('click', onCloseButtonClick);
  document.addEventListener('keydown', onDocumentKeydown);
};

function closePopup() {
  if (closeScript) {
    closeScript();
  }
  popup.classList.add('hidden');
  body.classList.remove('modal-open');

  closeButton.removeEventListener('click', onCloseButtonClick);
  document.removeEventListener('keydown', onDocumentKeydown);
  popup = null;
  closeButton = null;
  closeScript = null;
}

export { openPopup, closePopup };
