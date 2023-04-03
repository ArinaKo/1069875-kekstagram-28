import { sendData } from './api.js';
import { isKeyEscape, showSubmitMessage } from './utilities.js';
import { openPopup, closePopup } from './popup.js';
import { validateForm } from './form-validation.js';
import { resetSizing, onScaleClick } from './form-img-sizing.js';
import {
  resetEffect,
  onEffectButtonClick,
  onSliderUpdate,
} from './form-img-effects.js';

const SubmitButtonText = {
  IDLE: 'Опубликовать',
  SENDING: 'Публикую...',
};
const body = document.body;
const form = body.querySelector('.img-upload__form');
const fileField = form.querySelector('#upload-file');
const formOverlay = form.querySelector('.img-upload__overlay');
const closeButton = form.querySelector('#upload-cancel');
const hashtagsInput = form.querySelector('.text__hashtags');
const descriptionInput = form.querySelector('.text__description');
const effectLevel = form.querySelector('.effect-level');
const effectSlider = form.querySelector('.effect-level__slider');
const sizingButtons = form.querySelectorAll('.scale button');
const effectsList = form.querySelector('.effects__list');
const submitButton = form.querySelector('#upload-submit');
const successMessage = body
  .querySelector('#success')
  .content.querySelector('.success');
const errorMessage = body
  .querySelector('#error')
  .content.querySelector('.error');

const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = SubmitButtonText.SENDING;
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = SubmitButtonText.IDLE;
};

const onFormSubmit = (evt) => {
  evt.preventDefault();
  if (!validateForm()) {
    return;
  }
  blockSubmitButton();
  sendData(new FormData(evt.target))
    .then(() => {
      closePopup();
      showSubmitMessage(successMessage, body);
    })
    .catch(() => {
      showSubmitMessage(errorMessage, body);
    })
    .finally(unblockSubmitButton);
};

const onInputEscapeKeydown = (evt) => {
  if (isKeyEscape(evt)) {
    evt.stopPropagation();
  }
};

const openForm = () => {
  form.addEventListener('submit', onFormSubmit);
  effectSlider.noUiSlider.on('update', onSliderUpdate);
  effectsList.addEventListener('click', onEffectButtonClick);
  sizingButtons.forEach((button) =>
    button.addEventListener('click', onScaleClick)
  );
  hashtagsInput.addEventListener('keydown', onInputEscapeKeydown);
  descriptionInput.addEventListener('keydown', onInputEscapeKeydown);
};

const closeForm = () => {
  form.reset();
  resetEffect();
  resetSizing();
  effectLevel.classList.add('hidden');
  form.removeEventListener('submit', onFormSubmit);
  effectSlider.noUiSlider.off('update');
  effectsList.removeEventListener('click', onEffectButtonClick);
  sizingButtons.forEach((button) =>
    button.removeEventListener('click', onScaleClick)
  );
  hashtagsInput.removeEventListener('keydown', onInputEscapeKeydown);
  descriptionInput.removeEventListener('keydown', onInputEscapeKeydown);
};

fileField.addEventListener('change', () =>
  openPopup(formOverlay, closeButton, openForm, closeForm)
);
