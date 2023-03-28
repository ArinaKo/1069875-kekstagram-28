import { isKeyEscape } from './utilities.js';
import { openPopup, onCloseButtonClick } from './popup.js';
import { onFormSubmit } from './form-validation.js';
import { resetSizing, onScaleClick } from './form-img-sizing.js';
import {
  resetEffect,
  onEffectButtonClick,
  onSliderUpdate,
} from './form-img-effects.js';

const form = document.querySelector('.img-upload__form');
const fileField = form.querySelector('#upload-file');
const formOverlay = form.querySelector('.img-upload__overlay');
const closeButton = form.querySelector('#upload-cancel');
const hashtagsInput = form.querySelector('.text__hashtags');
const descriptionInput = form.querySelector('.text__description');
const effectLevel = form.querySelector('.effect-level');
const effectSlider = form.querySelector('.effect-level__slider');
const sizingButtons = form.querySelectorAll('.scale button');
const effectsList = form.querySelector('.effects__list');

const onInputEscapeKeydown = (evt) => {
  if (isKeyEscape(evt)) {
    evt.stopPropagation();
  }
};

const openForm = () => {
  form.addEventListener('submit', onFormSubmit);
  effectSlider.noUiSlider.on('update', onSliderUpdate);
  effectsList.addEventListener('click', onEffectButtonClick);
  sizingButtons.forEach((button) => button.addEventListener('click', onScaleClick));
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
  sizingButtons.forEach((button) => button.removeEventListener('click', onScaleClick));
  hashtagsInput.removeEventListener('keydown', onInputEscapeKeydown);
  descriptionInput.removeEventListener('keydown', onInputEscapeKeydown);
};

fileField.addEventListener('change', () =>
  openPopup(formOverlay, openForm, closeForm)
);

closeButton.addEventListener('click', onCloseButtonClick);
