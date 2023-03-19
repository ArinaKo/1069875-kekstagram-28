import { generateThumbnails } from './thumbnails.js';
import { openBigPicture } from './big-picture.js';
import { generatePosts } from './data.js';

const picturesList = document.querySelector('.pictures');

const postsData = generatePosts();
generateThumbnails(postsData);
const postsId = postsData.map((post) => post.id);

const onThumbnailClick = (thumbnailIndex) => {
  const post = postsData[postsId.indexOf(thumbnailIndex)];
  openBigPicture(post);
};

picturesList.addEventListener('click', (evt) => {
  if (evt.target.closest('.picture')) {
    evt.preventDefault();
    const thumbnailIndex = Number(evt.target.parentNode.id);
    onThumbnailClick(thumbnailIndex);
  }
});
