import { generateGallery } from './gallery.js';
import './form.js';
import { getData } from './api.js';
import { showError, debounce } from './utilities.js';
import { setFilters } from './filters.js';

const RERENDER_DELAY = 500;

const gallery = document.querySelector('.pictures');

getData()
  .then((data) => {
    generateGallery(data);
    setFilters(debounce(() => generateGallery(data), RERENDER_DELAY));
  })
  .catch((err) => {
    showError(err.message, gallery);
  });
