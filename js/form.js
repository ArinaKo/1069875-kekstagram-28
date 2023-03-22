import { openPopup, onCloseButtonClick } from './popup.js';

const form = document.querySelector('.img-upload__form');
const fileField = form.querySelector('#upload-file');
const formOverlay = form.querySelector('.img-upload__overlay');
const closeButton = form.querySelector('#upload-cancel');

const clearForm = () => {
  fileField.value = '';
};

fileField.addEventListener('change', () => openPopup(formOverlay, clearForm));

closeButton.addEventListener('click', onCloseButtonClick);
