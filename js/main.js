import { setGallery, renderGallery } from './gallery.js';
import { setForm } from './form.js';
import { getData } from './api.js';
import { showError, debounce } from './utilities.js';
import { setFilters } from './filters.js';

const RERENDER_DELAY = 500;

const gallery = document.querySelector('.pictures');

getData()
  .then((data) => {
    setGallery(data);
    setFilters(debounce(renderGallery, RERENDER_DELAY));
  })
  .catch((err) => {
    showError(err.message, gallery);
  });

setForm();
