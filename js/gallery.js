import { generateThumbnails } from './thumbnails.js';
import { openBigPicture } from './big-picture.js';
import { generatePosts } from './data.js';

const picturesList = document.querySelector('.pictures');

const postsData = generatePosts();
generateThumbnails(postsData);
const thumbnails = Array.from(picturesList.querySelectorAll('.picture'));

const onThumbnailClick = function (thumbnailIndex) {
  const post = postsData[thumbnailIndex];
  openBigPicture(post);
};

picturesList.addEventListener('click', (evt) => {
  if (evt.target.closest('.picture')) {
    evt.preventDefault();
    const thumbnailIndex = thumbnails.indexOf(evt.target.parentNode);
    onThumbnailClick(thumbnailIndex);
  }
});
