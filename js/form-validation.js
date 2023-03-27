const form = document.querySelector('.img-upload__form');
const hashtagsInput = form.querySelector('.text__hashtags');
const hashtagPattern = /^#[a-zа-яё0-9]{1,19}$/i;
let validationMessage;

const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'img-upload__field-wrapper--invalid',
  successClass: 'img-upload__field-wrapper--valid',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'span',
  errorTextClass: 'form__error',
});

const validateHashtag = (hashtag) => hashtagPattern.test(hashtag);

const validateHashtags = () => {
  if (!hashtagsInput.value) {
    return true;
  }

  const hashtags = hashtagsInput.value
    .trim()
    .toLowerCase()
    .split(' ')
    .map((item) => item.trim())
    .filter((item) => item.length);

  if (hashtags.length > 5) {
    validationMessage = 'Максимальное количество хэш-тегов 5';
    return false;
  }

  const check = hashtags.every((hashtag, id) => {
    const isValid = validateHashtag(hashtag);

    if (!isValid) {
      validationMessage = 'Присутствует не валидный хэш-тег';
      return false;
    }

    const isUnique = !hashtags.slice(id + 1).includes(hashtag);
    if (!isUnique) {
      validationMessage = 'Хэш-теги не уникальны';
    }

    return isUnique;
  });

  return check;
};

pristine.addValidator(hashtagsInput, validateHashtags, () => validationMessage);

form.addEventListener('submit', (evt) => {
  const isValid = pristine.validate();
  if (!isValid) {
    evt.preventDefault();
  }
});
