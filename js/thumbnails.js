import { generatePosts } from './data.js';

const pictures = document.querySelector('.pictures');
const thumbnailTemplate = document
  .querySelector('#picture')
  .content.querySelector('.picture');

const thumbnailsDate = generatePosts();

const generateGallery = () => {
  const thumbnailsFragment = document.createDocumentFragment();

  thumbnailsDate.forEach(({ url, likes, comments }) => {
    const thumbnail = thumbnailTemplate.cloneNode(true);

    thumbnail.querySelector('.picture__img').src = url;
    thumbnail.querySelector('.picture__likes').textContent = likes;
    thumbnail.querySelector('.picture__comments').textContent = comments.length;

    thumbnailsFragment.append(thumbnail);
  });

  pictures.append(thumbnailsFragment);
};

export { generateGallery };
