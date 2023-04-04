const HASHTAG_PATTERN = /^#[a-zа-яё0-9]{1,19}$/i;
const ValidationMessages = {
  INCORRECT_AMOUNT: 'Максимальное количество хэш-тегов 5',
  INVALID_HASHTAG: 'Присутствует не валидный хэш-тег',
  DOUBLE_HASHTAG: 'Хэш-теги не уникальны',
};

const form = document.querySelector('.img-upload__form');
const hashtagsInput = form.querySelector('.text__hashtags');

let validationMessage;

const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'img-upload__field-wrapper--invalid',
  successClass: 'img-upload__field-wrapper--valid',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'span',
  errorTextClass: 'form__error',
});

const isHashtagValid = (hashtag) => HASHTAG_PATTERN.test(hashtag);

const transformInputValue = (value) =>
  value
    .trim()
    .toLowerCase()
    .split(' ')
    .map((item) => item.trim())
    .filter((item) => item.length);

const validateHashtags = () => {
  if (!hashtagsInput.value) {
    return true;
  }

  const hashtags = transformInputValue(hashtagsInput.value);
  if (hashtags.length > 5) {
    validationMessage = ValidationMessages.INCORRECT_AMOUNT;
    return false;
  }

  const check = hashtags.every((hashtag, id) => {
    const isValid = isHashtagValid(hashtag);
    if (!isValid) {
      validationMessage = ValidationMessages.INVALID_HASHTAG;
      return false;
    }

    const isUnique = !hashtags.slice(id + 1).includes(hashtag);
    if (!isUnique) {
      validationMessage = ValidationMessages.DOUBLE_HASHTAG;
    }
    return isUnique;
  });

  return check;
};

pristine.addValidator(hashtagsInput, validateHashtags, () => validationMessage);

const validateForm = () => pristine.validate();

export { validateForm };
