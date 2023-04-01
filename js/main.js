import { generateGallery } from './gallery.js';
import './form.js';
import { getData } from './api.js';
import { showError } from './utilities.js';

const gallery = document.querySelector('.pictures');
const galleryErrorClass = 'pictures__error';

getData()
  .then((data) => {
    generateGallery(data);
  })
  .catch((err) => {
    showError(err.message, galleryErrorClass, gallery);
  });
