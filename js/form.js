import { openPopup, onCloseButtonClick } from './popup.js';
import { isKeyEscape } from './utilities.js';
import './form-validation.js';

const form = document.querySelector('.img-upload__form');
const fileField = form.querySelector('#upload-file');
const formOverlay = form.querySelector('.img-upload__overlay');
const closeButton = form.querySelector('#upload-cancel');
const hashtagsInput = form.querySelector('.text__hashtags');
const descriptionInput = form.querySelector('.text__description');

const onInputEscapeKeydown = (evt) => {
  if (isKeyEscape(evt)) {
    evt.stopPropagation();
  }
};

const openForm = () => {
  hashtagsInput.addEventListener('keydown', onInputEscapeKeydown);
  descriptionInput.addEventListener('keydown', onInputEscapeKeydown);
};

const closeForm = () => {
  form.reset();
  hashtagsInput.removeEventListener('keydown', onInputEscapeKeydown);
  descriptionInput.removeEventListener('keydown', onInputEscapeKeydown);
};

fileField.addEventListener('change', () => openPopup(formOverlay, openForm, closeForm));

closeButton.addEventListener('click', onCloseButtonClick);


