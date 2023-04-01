import { generateGallery } from './gallery.js';
import './form.js';
import { getData } from './api.js';

getData()
  .then((data) => {
    generateGallery(data);
  })
  .catch((err) => {
    console.error(err.message);
  });
